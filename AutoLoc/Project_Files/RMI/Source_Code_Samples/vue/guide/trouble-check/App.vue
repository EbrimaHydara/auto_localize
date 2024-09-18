<template>
  <div class="guide-trouble-check_Load">
    <div v-if="isLoading" class="guide-trouble-check_Load-active">
      <div class="guide-trouble-check_Load-icon">読み込み中</div>
    </div>
    <div class="l-System_Container">
      <h1 class="c-Heading_Lv1 u-Adjust_Pt-32">トラブル解決ナビ</h1>
      <p class="u-Adjust_Mt-16">お困りごとを選んでいくだけで解決方法をご案内します。</p>
    </div>
    <div class="guide-trouble-check u-Adjust_Mt-24 u-Adjust_Pb-24" :class="containerClass">
      <div class="guide-trouble-check_box">
        <step-back-link
          v-if="this.step"
          :to="stepBackPath"
          @click="sendUserAction(`back_${stepId}`)"
        />
        <router-view
          :step="step"
          :step-map="stepMap"
          :solution-map="solutionMap"
          :tab-id="tabId"
          :step-id="stepId"
          :is-debug-mode="isDebugMode"
          @log="sendUserAction"
          @loading="toggleLoading"
        >
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { DRILL_DOWN_LIST, STEP_PROP_PREFIX } from './AppConstants'
import StepBackLink from './atoms/StepBackLink.vue'

export default {
  name: 'TroubleCheckApp',
  components: {
    StepBackLink,
  },
  data:() => ({
    isFetching: false,
    isLoading: false,
    drillDownList: {},
    userActionKeyMap: {},
  }),
  computed: {
    step() {
      const regex = new RegExp(`(${STEP_PROP_PREFIX})(\\d+)(-\\d+)`)
      return Number(this.stepId.replace(regex, '$2'))
    },
    stepId() {
      return this.$route.params.stepId?.trim() ?? ''
    },
    isDebugMode() {
      return this.stepId === 'all'
    },
    tabId() {
      return this.$route.params.tabId ?? DRILL_DOWN_LIST[0].id
    },
    stepBackPath() {
      const [, parentPath] = (this.stepMap[this.stepId] ?? [])
      return parentPath ? `/${this.tabId}/${parentPath}` : `/${this.tabId}`
    },
    containerClass() {
      return {
        'u-Adjust_Pt-0': !this.step,
        'u-Adjust_Pt-24': this.step,
      }
    },
    mapProvider() {
      return this.drillDownList[this.tabId] ?? []
    },
    stepMap() {
      return this.mapProvider[0] ?? {}
    },
    solutionMap() {
      return this.mapProvider[1] ?? {}
    },
    userActionAnalyzer() {
      return document.querySelector('#rat-variable')
    }
  },
  methods: {
    async fetchJSON(url) {
      const res = await fetch(url)
      if (res.status === 200) {
        const list = await res.json()
        return list
      } else {
        reject([])
      }
      return []
    },
    async fetchTabList() {
      this.isFetching = true
      const results = await Promise.allSettled(
        DRILL_DOWN_LIST.map(({ url }) => this.fetchJSON(`${url}?t=${Date.now()}`))
      )
      this.isFetching = false
      return results.map(({ status, value }) => status === 'fulfilled' ? value : [])
    },
    normalizeList(list) {
      return list.reduce((list, rowItem, row) => {
        list[row] = rowItem.map((colItem, col) => {
          const shouldCopy = /^\|/.test(colItem ?? '')
          if (shouldCopy) {
            const prevRowItem = list[row - 1]
            colItem = prevRowItem[col]
          }
          return colItem
        })
        return list
      }, [])
    },
    createStepList(list, endColumn) {
      return list.reduce((list, row) => {
        const items = []
        for (let i = 0; i < endColumn; i++) {
          const value = row[i]
          if (/\S/.test(value ?? '')) {
            const regex = /\[(.+)\]/
            try {
              const [, stepId]= value.match(regex)
              const text = value.replace(regex, '')
              items.push([stepId, text])
            } catch (error) {
              console.error(`Failed to get stepId with ${value}`)
            }
          }
        }
        list.push(items)
        return list
      }, [])
    },
    createStepMap(list) {
      const stepMap = {}
      list.forEach(tuple => {
        tuple.forEach(([itemId, text], index) => {
          const list = stepMap[itemId] ?? []
          // 1. Set text
          list[0] = text
          // 2. Set parent
          const prevItem = tuple[index - 1]
          if (prevItem) {
            const [prevStepId] = prevItem
            list[1] = prevStepId
          } else {
            list[1] = ''
          }
          // 3. Set children
          const nextIds = list[2] ?? []
          const nextItem = tuple[index + 1]
          if (nextItem) {
            const [nextStepId] = nextItem
            const hasId = nextIds.some(id => id === nextStepId)
            if (!hasId) nextIds.push(nextStepId)
          }
          list[2] = nextIds
          //
          stepMap[itemId] = list
        })
      })
      return stepMap
    },
    createSolutionMap({ list, solutionStartIndex, errorCodeIndex }) {
      return list.reduce((map, row) => {
        const lastStepIndex = (() => {
          const stepColumns = row.slice(0, solutionStartIndex)
          for (let i = 0; i < stepColumns.length; i++) {
            const text = stepColumns[i]
            const isEmpty = !/\S/.test(text ?? '')
            if (isEmpty) return i - 1
          }
          return solutionStartIndex - 1
        })()
        const [, stepId] = row[lastStepIndex].match(/\[(.+)\]/) ?? []
        let solutionsArray = [];
        for (const [index, solution] of row.slice(solutionStartIndex, errorCodeIndex).entries()) {
            solution > 0 && solutionsArray.push({order: solution, solutionId: index + 1})
        }
        const sortedSolutionsArray = solutionsArray.sort((a, b) => {
          return (a.order < b.order) ? -1 : 1;
        });
        const sortedSolutions = sortedSolutionsArray.map((solution) => {
          return solution.solutionId
        })
        const errorCode = row[errorCodeIndex]
        map[stepId] = [errorCode, sortedSolutions]
        return map
      }, {})
    },
    createMaps(list) {
      const propRow = list.shift()
      const normalizedList = this.normalizeList(list)
      const stepProps = propRow.filter(prop => prop.startsWith(STEP_PROP_PREFIX))
      const stepList = this.createStepList(normalizedList, stepProps.length)
      const stepMap = this.createStepMap(stepList)
      const solutionMap = this.createSolutionMap({
        list: normalizedList,
        solutionStartIndex: stepProps.length,
        errorCodeIndex: propRow.findIndex((prop) => prop === 'errorCode')
      })
      return [stepMap, solutionMap]
    },
    replaceRouteIfNeeded() {
      if (this.isDebugMode) return
      //
      const locationBase = { query: this.$route.query }

      // If the tab ID is defined but not the value defined in AppConstants, it is invalid.
      const isValidTabId = DRILL_DOWN_LIST.some(({ id }) => this.tabId === id)
      if (!isValidTabId) {
        this.$router.replace({ ...locationBase, name: 'entry' })
        return
      }
    },
    sendUserAction(log) {
      if (this.isDebugMode) {
        console.log(`[Log] ${this.userActionAnalyzer.dataset.ratid}`)
      }
      //
      try {
        this.userActionAnalyzer.dataset.ratid = `guide_trouble-check_${log}`
        this.userActionAnalyzer.dispatchEvent(new Event('click'))
        // console.log(`[Log] ${this.userActionAnalyzer.dataset.ratid}`)
      } catch (error) {
        console.log(error)
      }
    },
    toggleLoading(boolean) {
      this.isLoading = boolean;
    },
  },
  async created() {
    const results = await this.fetchTabList()
    const hasError = results.some(list => !list.length)
    if (hasError) {
      this.$router.push({ name: 'error' })
      return
    }
    this.drillDownList = results.reduce((list, result, index) => {
      const key = DRILL_DOWN_LIST[index].id
      list[key] = this.createMaps(result)
      return list
    }, {})

    this.replaceRouteIfNeeded()
  },
}
</script>

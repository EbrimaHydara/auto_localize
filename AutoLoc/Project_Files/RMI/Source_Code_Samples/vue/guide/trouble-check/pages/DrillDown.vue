<template>
  <div>
    <div class="guide-trouble-check_three-level">
      <h2 class="c-Heading_Lv2" v-text="heading"></h2>
      <div class="c-Tab">
        <ul class="c-Tab_Items u-Adjust_Mt-16" role="tablist" v-if="shouldUseTabUI">
          <router-link
            v-for="{ id, ariaSelected, label, to } in tabList"
            :to="to"
            :id="id"
            :key="id"
            :aria-selected="ariaSelected"
            tag="li"
            role="tab"
            aria-controls="tab-content"
            class="c-Tab_Item "
          >{{ label }}</router-link>
        </ul>
        <ul v-if="stepList" class="flexbox fw u-Adjust_Mt-16" id="tab-content" :aria-labelledby="tabId" aria-hidden="false">
          <li v-for="stp in stepList" :key="stp[0]">
            <div
              :class="{
                'c-Form_Radio': true,
                'c-Form_Radioblock-wrap': true,
                'c-Form_Radio--Selected': shouldSelectRadio(stp[0])
              }"
              @click="onStepUpdate(stp[0])"
            >
              <template v-if="step">
                <span class="c-Form_Radio-icon"></span>
                <div class="c-Form_Radioblock-label" v-text="stp[1]"></div>
              </template>
              <template v-if="!step">
                <img :src="stp[2]">
                <div class="c-Form_Radioblock-label" style="padding-left: 10px; font-weight: bold;" v-text="stp[1]"></div>
              </template>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { STEP_PROP_PREFIX, DRILL_DOWN_LIST } from '../AppConstants'

export default {
  name: 'TroubleCheckDrillDown',
  props: {
    tabId: { type: String, default: '', required: true },
    stepId: { type: String, default: '', required: true },
    step: { type: Number, default: 1, required: true },
    stepMap: { type: Object, default: {}, required: true  },
    solutionMap: { type: Object, default: {}, required: true  },
    isDebugMode: { type: Boolean, default: false }
  },
  data: () => ({
    lastStepId: '',
  }),
  computed: {
    firstSteps() {
      const stepList = Object.keys(this.stepMap).reduce((list, stepId) => {
        if (stepId.startsWith(`${STEP_PROP_PREFIX}1-`)) {
          const [text] = this.stepMap[stepId]
          list.push([stepId, text])
        }
        return list
      }, [])
      const IMAGE_URL = '/assets/img/guide/trouble-check/'
      for( let i = 0; i < stepList.length; i++) {
        let number = i + 1
        const imgSrc = IMAGE_URL + this.tabId + '/step_' + number + '.png?230926'
        stepList[i].push(imgSrc)
      }
      return stepList
    },
    stepList() {
      if (!this.stepId) { return this.firstSteps }
      const [, , stepIds] = this.stepMap[this.stepId] ?? []
      return stepIds?.map(stepId => {
        const [text] = this.stepMap[stepId]
        return [stepId, text]
      }) ?? []
    },
    heading() {
      const message = 'お困りの内容をお選びください。'
      const stepInfo = this.stepMap[this.stepId]
      if (stepInfo) return `${stepInfo[0]}に関する${message}`
      return message
    },
    tabList() {
      return DRILL_DOWN_LIST.map(({ id, label }) => ({
        label, id,
        to: `/${id}/${this.stepId}`,
        ariaSelected: id === this.tabId
      }))
    },
    shouldUseTabUI() {
      return this.step === 0 && this.tabList.length > 1
    }
  },
  methods: {
    shouldSelectRadio(stepId) {
      const isSingleSelection = this.stepList.length <= 1
      const isSelected = this.lastStepId === stepId
      return isSingleSelection ? false : isSelected
    },
    onStepUpdate(stepId) {
      const [,, nextStepIds] = this.stepMap[stepId]
      const log = `${this.tabId}_${stepId}`
      this.$emit('log', log)
      this.$router.push({
        name: nextStepIds.length ? 'drill-down' : 'solution',
        params: {
          stepId,
          tabId: this.tabId,
        }
      })
    }
  },
  beforeRouteEnter(_to, from, next) {
    next(vm => vm.lastStepId = from.params.stepId ?? '')
  },
  beforeRouteUpdate(_to, from, next) {
    this.lastStepId = from.params.stepId
    next()
  },
}
</script>

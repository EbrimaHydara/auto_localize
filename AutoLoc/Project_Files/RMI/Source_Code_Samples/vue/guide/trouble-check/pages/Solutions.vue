<template>
  <div>
    <div class="guide-trouble-check_three-level guide-trouble-check_result">
      <h2 class="c-Heading_Lv2">対処方法をお試しください。</h2>
      <dl class="u-Adjust_Mt-16 c-Txt_Cap c-Theme-Emphasis2">
        <dt class="c-Txt_Normal-m c-Txt_Emp-01">注意事項</dt>
        <dd class="u-Adjust_Mt-16">※再起動やアプリの初期化、アンインストールなど、保存データに影響する可能性がある対処を行う際は、あらかじめデータのバックアップを保存したうえで実施してください。<br>
        各対処方法の実施により生じる直接的および間接的損害について、一切の責任を負いかねます。あらかじめご了承ください。<br><br>
        ※製品の使用中・充電中に発煙・発熱等異常が見られた場合、充電器をコンセントから抜き、製品の電源を切る等して利用を中止し、メーカーへご連絡ください。<br><br>
        ※対処方法はAQUOS sense4 lite/iPhone14の操作方法を基準にご案内しています。製品やソフトウェアのバージョンによって手順や表記が異なる場合がありますので、詳細はご利用している製品の取扱説明書をご確認ください。</dd>
      </dl>
      <ol class="u-Adjust_Mt-24" v-if="solutions.length">
        <solution
          v-for="([id, content], index) in solutions"
          ref="solution"
          v-model="openFlags[index]"
          :key="id"
          :index="index"
          :id="id"
          :content="content"
          :has-next="(index < solutions.length - 1)"
          :error-code="errorCode"
          :is-debug-mode="isDebugMode"
          @result="onResult"
        />
      </ol>
    </div>
    <modal v-show="hasModal" v-model="hasModal" style="z-index: 1; position: relative;">
      <h2 class="u-Adjust_Align-center c-Txt_Normal-m">ご回答ありがとうございました。</h2>
        <!-- キャンペーン終了時以下を削除 -->
        <div class="guide-flow-inquiry-Main_Appealbox u-Adjust_Mt-16">
            <p class="c-Txt_Emp-01 u-Adjust_Align-center">抽選で1,500ポイントが当たる<br class="u-Show_Sp">キャンペーン実施中！</p>
            <p class="u-Adjust_Mt-16">本キャンペーンの抽選へ参加するには、「アンケートに回答する」ボタンをタップして、表示される案内に沿ってアンケートにご回答ください。</p>
            <p class="c-Txt_Cap u-Adjust_Mt-8">※当選者のみアンケート回答月の翌々月末日頃に、期間限定ポイントを付与します。</p>
            <div class="guide-flow-inquiry-Main_Appealbox-btn">
                <a href="/campaign/support-survey/?l-id=guide_trouble-check_positive_campaign_support-survey" target="_blank" class="c-Btn_Regular"><span>キャンペーン詳細を確認する<span class="c-Icon_New-window-l c-Btn_Icon-end"></span></span></a>
                <a href="#" @click.prevent="onQabtnClick" target="_blank" class="c-Btn_Secondly"><span>アンケートに回答する<span class="c-Icon_New-window-l c-Btn_Icon-end"></span></span></a>
            </div>
        </div>
      <p class="u-Adjust_Mt-16">他にもお困りごとがありましたら、はじめからやり直す、またはお客様サポートをご確認ください。<br>
        最適な対処方法とお問い合わせ先をご案内いたします。</p>
      <div class="u-Adjust_Mt-16 u-Adjust_Align-center">
        <a class="c-Btn_Regular"
          href="#"
          @click.prevent="restart"
        >はじめからやり直す</a>
      </div>
      <div class="u-Adjust_Mt-16 u-Adjust_Align-center">
        <a class="c-Btn_Regular"
          href="/support/?l-id=guide_trouble-check_support"
          @click="$emit('log', `${logPrefix}positive_support`)"
        >お客様サポートトップに戻る</a>
      </div>
      <div class="u-Adjust_Mt-16 u-Adjust_Align-center">
        <a class="c-Btn_Regular"
          href="/?l-id=guide_trouble-check_support"
          @click="$emit('log', `${logPrefix}positive_mobile-top`)"
        >楽天モバイルトップに戻る</a>
      </div>
    </modal>
  </div>
</template>

<script lang="js">
import { SOLUTION_PAGE_BASE } from '../AppConstants'
import CollapseTransition from '../transitions/CollapseTransition.vue'
import Modal from '../molecules/Modal.vue'
import Solution from '../molecules/Solution.vue'

export default {
  name: 'TroubleCheckSolutions',
  components: {
    CollapseTransition,
    Modal,
    Solution,
  },
  props: {
    tabId: { type: String, default: '', required: true },
    stepId: { type: String, default: '', required: true },
    step: { type: Number, default: 1, required: true },
    stepMap: { type: Object, default: {}, required: true  },
    solutionMap: { type: Object, default: {}, required: true  },
    isDebugMode: { type: Boolean, default: false }
  },
  data: () => ({
    isFetching: false,
    hasModal: false,
    solutions: [],
    openFlags: [],
    abortController: new AbortController(),
    hash: location.hash
  }),
  computed: {
    solutionNumbers() {
      const [, solutoinNumbers] = this.solutionMap[this.stepId] ?? []
      return solutoinNumbers ?? []
    },
    signal() {
      return this.abortController.signal
    },
    errorCode() {
      const [errorCode,] = this.solutionMap[this.stepId] ?? []
      return errorCode ?? ''
    },
    logPrefix() {
      return `${this.tabId}_${this.stepId}_`
    },
    popAsk() {
      return document.querySelector('#rat-variable + .l-System_Container')
    }
  },
  watch: {
    solutionNumbers: {
      immediate: true,
      handler: 'onSolutionNumbersChange'
    },
    hasModal(value) {
      if (!value) {
        this.$emit('log', `${this.logPrefix}positive_close`)
      }
    }
  },
  methods: {
    async fetchSolution(url) {
      const res = await fetch(url, {
        signal: this.signal,
        'Content-Type': 'text/html; charset=UTF-8'
      })
      if (res.status === 200) {
        const solution = await res.text()
        return solution
      } else reject([])
    },
    async fetchSolutions(solutionNumbers) {
      if (solutionNumbers.length === 0) return
      this.isFetching = true
      this.$emit('loading', true);
      const results = await Promise.allSettled(solutionNumbers.map((id) => {
        const url = `${SOLUTION_PAGE_BASE}/${id.toString().padStart(3, '0')}.html?t=${Date.now()}`
        return this.fetchSolution(url)
      }))
      this.isFetching = false
      this.$emit('loading', false);
      this.solutions = results.map(({ status, value }, index) => {
        const solutionId =  solutionNumbers[index]
        const html = (status === 'fulfilled') ? value : `<h3>[Error] ${solutionId}</h3><p>読み込みに失敗しました。</p>`
        return [solutionId, html.trim()]
      })
      this.openFlags = [...Array(this.solutions.length)].map((_, index) => !Boolean(index))
    },
    getAllSolutionNumbers() {
      return Array.from(Object.keys(this.solutionMap).reduce((set, key) => {
        const [, solutoinNumbers] = this.solutionMap[key]
        solutoinNumbers.forEach(number => set.add(number))
        return set
      }, new Set())).sort((a, b) => a < b ? -1 : 1)
    },
    restart() {
      this.$emit('log', `${this.logPrefix}positive_restart`)
      this.$router.push({ name: 'drill-down', params: { tabId: this.tabId } })
    },
    onResult({ type, id, index, errorCode }) {
      switch (type) {
        case 'resolved':
          this.$emit('log', `${this.logPrefix}${index+1}_positive`)
          this.hasModal = true
          break
        case 'pending':
          this.$emit('log', `${this.logPrefix}${index+1}_negative`)
          const rect = this.$refs.solution[index].$el.getBoundingClientRect()
          const adjustiment = rect.top > 0 ? 0 : rect.top
          const top = window.pageYOffset + rect.height + adjustiment
          this.openFlags.splice(index + 1, 1, true)
          // Start scrolling when the accordion is opened. (A bit messy )
          setTimeout(() => window.scrollTo({ top, behavior: 'smooth' }), 300)
          break
        case 'unresolved':
          this.$emit('log', `${this.logPrefix}${index+1}_negative`)
          try {
            inquiryList.setInfo({ errorCode, category: this.tabId, solutionId: this.stepId })
            inquiryList.showInfo()

            const inquiryPosition = document.getElementById('inquiry-block').getBoundingClientRect().top
            const top = inquiryPosition + window.pageYOffset
            setTimeout(() => window.scrollTo({ top, behavior: 'smooth' }), 300)
          } catch (error) {
            console.error(error.message)
          }
          break
        default:
          console.log(`${type} is invalid.`)
      }
    },
    onSolutionNumbersChange(value) {
      const shouldListAllItem = this.isDebugMode
      const solutionNumbers = shouldListAllItem ? this.getAllSolutionNumbers() : value
      this.fetchSolutions(solutionNumbers)
    },
    onQabtnClick() {
        const link = '/campaign/support-survey/form/?l-id=faq-Review_Btn-positive';
        const param = this.hash.slice(2, -9).replace('/', '_');
        const newUrl = `${link}&?stepid=${param}`;
        window.open(newUrl, '_blank');
    }
  },
  mounted() {
    this.popAsk.style.display = 'block';
  },
  beforeDestroy() {
    try {
      inquiryList.hideInfo()
    } catch (error) {
      console.error(error.message)
    }
    this.popAsk.style.display = 'none'
    this.abortController.abort()  // Cancel fetch in progress
  }
}
</script>

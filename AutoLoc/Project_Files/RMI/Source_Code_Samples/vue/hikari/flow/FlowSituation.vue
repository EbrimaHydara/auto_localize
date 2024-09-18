<template>
    <div>
        <div class="hikari-flow-Layout_Situation">
            <dl class="hikari-flow-List_Questions l-System_Container">
                <div>
                    <div ref="shadowRat01" data-ratid="rhk_flow_accordion_02" data-ratevent="click" data-ratparam="all"></div>
                    <div ref="shadowRat02" data-ratid="rhk_flow_modal_01" data-ratevent="click" data-ratparam="all"></div>
                    <div ref="shadowRat03" data-ratid="rhk_flow_accordion_03" data-ratevent="click" data-ratparam="all"></div>
                    <div ref="shadowRat04" data-ratid="rhk_flow_modal_02" data-ratevent="click" data-ratparam="all"></div>
                    <dt>
                        <span>現在のインターネットの利用状況を選択してください。</span>
                    </dt>
                    <dd>
                        <ul class="hikari-flow-List_Choices">
                            <li
                                v-for="(item , index) in situationList"
                                :key="index">
                                <label
                                    class="c-Form_Radioblock-border"
                                    :for="item.id"
                                >
                                    <input
                                        type="radio"
                                        :name="item.id"
                                        :id="item.id"
                                        :value="item.id"
                                        :data-ratid="ratName('rhk_flow_radio_', index)"
                                        data-ratevent="click"
                                        data-ratparam="all"
                                        @click="selectedType(item.id); scroll()"
                                        v-model="checked"
                                    >
                                    <span class="c-Form_Radioblock-wrap">
                                        <span class="c-Form_Radio-icon"></span>
                                        <span class="c-Form_Radioblock-label">{{ item.text }}<small v-if="item.smallText" class="hikari-flow-List_Choices-txt-sm">{{ item.smallText }}</small></span>
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </dd>
                </div>
            </dl>
        </div>
        <div ref="flow" id="flow">
            <FletsHikari v-if="hasFletsHikari" :phoneStyle="phoneStyle" :shadowRatElms="shadowRatElms"/>
            <HikariCollaboration v-else-if="hasHikariCollaboration" :phoneStyleSM="phoneStyleSM" :shadowRatElms="shadowRatElms" />
            <NoUsing v-else-if="hasNousing" />
            <IdontKnow v-else :phoneStyle="phoneStyle" />
        </div>
    </div>
</template>

<script>
import FletsHikari from './components/FletsHikari.vue'
import HikariCollaboration from './components/HikariCollaboration.vue'
import IdontKnow from './components/IdontKnow.vue'
import NoUsing from './components/NoUsing.vue'

export default {
    components: {
        IdontKnow,
        NoUsing,
        FletsHikari,
        HikariCollaboration,
    },
    data() {
        return {
            type: null,
            checked: false,
            phoneStyle: { fontSize: '24px', fontWeight: '700' },
            phoneStyleSM: {},
            situationList: [
                {
                    id: 'q01',
                    text: 'フレッツ光を利用している',
                    smallText: null,
                },
                {
                    id: 'q02',
                    text: '光コラボを利用している',
                    smallText: 'ドコモ光、SoftBank 光、OCN 光、ビッグローブ光、So-net 光 プラス、ぷらら光、＠nifty光、エキサイト光 等',
                },
                {
                    id: 'q03',
                    text: 'その他の光回線を利用している',
                    smallText: 'auひかり、NURO 光、J:COM光、eo光、コミュファ光 、ケーブルテレビインターネット、電力系光回線 等',
                },
                {
                    id: 'q04',
                    text: 'ポケットWi-Fiやテザリングを利用している',
                    smallText: 'SoftBank Air 等',
                },
                {
                    id: 'q05',
                    text: 'ADSL回線を利用している',
                    smallText: null,
                },
                {
                    id: 'q06',
                    text: 'インターネット回線を利用していない',
                    smallText: null,
                },
            ]
        }
    },
    methods: {
        selectedType(type) {
            this.type = type
        },
        scroll() {
            const distance = this.$refs.flow.getBoundingClientRect().top
            window.scrollTo({
                top: distance + window.scrollY,
                left: 0,
                behavior: 'smooth'
            })
        }
    },
    computed: {
        hasFletsHikari() {
            return this.type === 'q01'
        },
        hasHikariCollaboration() {
            return this.type === 'q02'
        },
        hasNousing() {
            return this.type === 'q03' || this.type === 'q04' || this.type === 'q05' || this.type === 'q06'
        },
        ratName() {
            return (prefix, index) => {
                return `${prefix}${('0' + (+index + 1)).slice(-2)}`
            }
        },
        shadowRatElms() {
            return [this.$refs.shadowRat01, this.$refs.shadowRat02, this.$refs.shadowRat03, this.$refs.shadowRat04]
        }
    },
    mounted() {
        if (location.hash) {
            switch (location.hash) {
                case '#flowA2':
                    this.type = 'q01'
                    this.scroll()
                    break
                case '#flowA3':
                    this.type = 'q02'
                    this.scroll()
                    break
                case '#flowA1':
                    this.type = 'q03'
                    this.scroll()
                    break
                default:
                    break //do nothing
            }
        }
    },
    created() {
        if (!navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
            this.phoneStyle = {
                fontSize: '24px',
                fontWeight: '400',
                color: '#333',
                pointerEvents: 'none',
                textDecoration: 'none'
            }
            this.phoneStyleSM = {
                color: '#333',
                pointerEvents: 'none',
                textDecoration: 'none'
            }
        }
    }
}
</script>

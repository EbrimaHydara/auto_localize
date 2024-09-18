<template>
    <div id="point">
        <div class="u-Rat_Appear-height" data-ratid="campaign_iphone-point_scroll-04_simulation_b1" data-ratevent="appear">&nbsp;</div>
        <div class="iphone-point-Simulation_Head iphone-point-Simulation_Layout">
            <img src="/assets/img/campaign/common/text-01.png" alt="＼条件を選択してください／" width="312">
        </div>
        <div class="iphone-point-Simulation iphone-point-Simulation_Layout">
            <div class="iphone-point-Simulation_Layout-1">
            <section>
                <h3 class="c-Txt_Normal c-Txt_Emp-01">「Rakuten最強プラン」へのお申し込み状況</h3>
                <div class="u-Adjust_Mt-8">
                <div class="c-Form_Select">
                    <select v-model="select1" @change="selectQ1()">
                        <option value="">選択してください</option>
                        <option value="はじめてのお申し込み">はじめてのお申し込み</option>
                        <option value="2回線目以降のお申し込み">2回線目以降のお申し込み</option>
                    </select>
                    <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
                </div>
                </div>
            </section>
            <section>
                <h3 class="c-Txt_Normal c-Txt_Emp-01">お申し込み種別</h3>
                <div class="u-Adjust_Mt-8">
                    <div class="c-Form_Select">
                        <select v-model="select2" @change="selectQ2()" :disabled="select2Disabled">
                            <option value="">選択してください</option>
                            <option value="他社からの乗り換え（MNP）">他社からの乗り換え（MNP）</option>
                            <option value="新しい電話番号で申し込む">新しい電話番号で申し込む</option>
                            <option value="楽天モバイル内でプラン変更">楽天モバイル（ドコモ回線・au回線）からプラン変更（移行）</option>
                        </select>
                        <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
                    </div>
                </div>
            </section>
            </div>
            <section v-show="productDisplay" class="u-Adjust_Mt-24">
                <h3 class="c-Txt_Normal c-Txt_Emp-01">購入する製品</h3>
                <div class="iphone-point-Simulation_Layout-2">
                    <div class="u-Adjust_Mt-8">
                        <label class="c-Form_Radio">
                            <input type="radio" name="product" class="js-radio-product" v-model="selectProduct" @change="selectProductPoint()" value="product1" data-ratid="campaign_iphone-point_simulation-check3-1" data-ratevent="click" data-ratparam="all">
                            <span class="c-Form_Radio-icon"></span><span class="c-Form_Radio-label iphone-point-Simulation_Label">
                                iPhone 15 Pro Max<br>
                                iPhone 15 Pro<br>
                                iPhone 15 Plus<br>
                                iPhone 15<br>
                                iPhone 14 Plus<br>
                                iPhone 14<br>
                                iPhone 13<br>
                                iPhone SE（第3世代）
                            </span>
                        </label>
                        <p class="iphone-point-Simulation_Point"><span v-if="product1point !== 0">+</span><span>{{ product1point | addComma }}</span>ポイント</p>
                    </div>
                    <!-- <div class="u-Adjust_Mt-8">
                        <label class="c-Form_Radio">
                            <input type="radio" name="product" class="js-radio-product" v-model="selectProduct" @change="selectProductPoint()" value="product2" data-ratid="campaign_iphone-point_simulation-check3-2" data-ratevent="click" data-ratparam="all">
                            <span class="c-Form_Radio-icon"></span><span class="c-Form_Radio-label iphone-point-Simulation_Label">
                                iPhone SE（第3世代）
                            </span>
                        </label>
                        <p class="iphone-point-Simulation_Point"><span v-if="product2point !== 0">+</span><span>{{ product2point | addComma }}</span>ポイント</p>
                    </div> -->
                    <div class="u-Adjust_Mt-8">
                        <label class="c-Form_Radio">
                            <input type="radio" name="product" class="js-radio-product" v-model="selectProduct" @change="selectProductPoint('製品を購入しない')" value="product4" data-ratid="campaign_iphone-point_simulation-check3-4" data-ratevent="click" data-ratparam="all">
                            <span class="c-Form_Radio-icon"></span><span class="c-Form_Radio-label iphone-point-Simulation_Label">製品を購入しない</span>
                        </label>
                        <p class="iphone-point-Simulation_Point"><span v-if="product4point !== 0">+</span><span>{{ product4point | addComma }}</span>ポイント</p>
                    </div>
                </div>
            </section>

            <section v-show="paymentDisplay" class="u-Adjust_Mt-32">
                <h3 class="c-Txt_Normal c-Txt_Emp-01">製品代金の支払方法</h3>
                <div class="iphone-point-Simulation_Layout-3">
                    <div class="u-Adjust_Mt-8">
                        <label class="c-Form_Radio">
                            <input type="radio" name="payment" class="js-radio-payment" v-model="selectPayment" @change="selectPaymentPoint()" value="買い替え超トク（48回払い）" data-ratid="campaign_iphone-point_simulation-check4-1" data-ratevent="click" data-ratparam="all">
                            <span class="c-Form_Radio-icon"></span><span class="c-Form_Radio-label iphone-point-Simulation_Label">楽天モバイル買い替え超トクプログラム<br>（48回払い）で購入</span>
                        </label>
                        <p class="iphone-point-Simulation_Point"><span v-if="payment1point !== 0">+</span><span>{{ payment1point | addComma }}</span>ポイント</p>
                    </div>
                    <div class="u-Adjust_Mt-8">
                        <label class="c-Form_Radio">
                            <input type="radio" name="payment" class="js-radio-payment" v-model="selectPayment" @change="selectPaymentPoint()" value="一括／24回払いで購入" data-ratid="campaign_iphone-point_simulation-check4-2" data-ratevent="click" data-ratparam="all">
                            <span class="c-Form_Radio-icon"></span><span class="c-Form_Radio-label iphone-point-Simulation_Label">一括／24回払いで購入</span>
                        </label>
                        <p class="c-Txt_Cap c-Txt_Emp-02">一括／24回払いの場合は{{ iphone14_15select ? '20,000' : '10,000' }}円値引き！*5</p>
                        <p class="iphone-point-Simulation_Point"><span v-if="payment2point !== 0">+</span><span>{{ payment2point | addComma }}</span>ポイント</p>
                    </div>
                </div>
            </section>
        <!--
            <section v-show="tradeinDisplay" class="u-Adjust_Mt-32">
                <h3 class="c-Txt_Normal c-Txt_Emp-01">下取りする製品</h3>
                <div class="iphone-point-Simulation_Layout-2">
                    <div class="u-Adjust_Mt-8">
                        <label class="c-Form_Radio">
                            <input type="radio" name="tradein" class="js-radio-tradein" v-model="selectTradein" @change="selectTradeinPoint()" value="主要な下取り対象製品" data-ratid="campaign_iphone-point_simulation-check5-1" data-ratevent="click" data-ratparam="all">
                            <span class="c-Form_Radio-icon"></span><span class="c-Form_Radio-label iphone-point-Simulation_Label">
                                iPhone 7<br>
                                iPhone 7 Plus<br>
                                iPhone 8<br>
                                iPhone 8 Plus<br>
                                iPhone X
                            </span>
                        </label>
                        <p class="iphone-point-Simulation_Point"><span v-if="tradein1point !== 0">+</span><span>{{ tradein1point | addComma }}</span>ポイント</p>
                    </div>
                    <div class="u-Adjust_Mt-8">
                        <label class="c-Form_Radio">
                            <input type="radio" name="tradein" class="js-radio-tradein" v-model="selectTradein" @change="selectTradeinPoint()" value="その他の下取り対象製品" data-ratid="campaign_iphone-point_simulation-check5-2" data-ratevent="click" data-ratparam="all">
                            <span class="c-Form_Radio-icon"></span><span class="c-Form_Radio-label iphone-point-Simulation_Label">その他の下取り対象製品</span>
                        </label>
                        <p class="iphone-point-Simulation_Point"><span v-if="tradein2point !== 0">+</span><span>{{ tradein2point | addComma }}</span>ポイント</p>
                    </div>
                    <div class="u-Adjust_Mt-8">
                        <label class="c-Form_Radio">
                            <input type="radio" name="tradein" class="js-radio-tradein" v-model="selectTradein" @change="selectTradeinPoint()" value="下取り利用しない" data-ratid="campaign_iphone-point_simulation-check5-3" data-ratevent="click" data-ratparam="all">
                            <span class="c-Form_Radio-icon"></span><span class="c-Form_Radio-label iphone-point-Simulation_Label">利用しない</span>
                        </label>
                        <p class="iphone-point-Simulation_Point"><span v-if="tradein3point !== 0">+</span><span>{{ tradein3point | addComma }}</span>ポイント</p>
                    </div>
                </div>
            </section>
        -->
            <section class="iphone-point-Simulation_Point-total">
                <div>
                    <div class="iphone-point-Simulation_Layout-5">
                        <h3 class="c-Heading_Lv4"><img src="/assets/img/campaign/common/text-02.png" alt="あなたが獲得できるポイントは" width="286"></h3>
                        <div class="iphone-point-Simulation_Point-total-wrap">
                            <span class="iphone-point-Simulation_Point-total-number">{{ totalPoint }}</span>
                            <div class="iphone-point-Simulation_Point-total-text">
                            <div class="c-Txt_Cap">{{ totalNote }}</div>
                            <div class="c-Txt_Emp-02"><img src="/assets/img/campaign/common/text-03.png" alt="ポイント" width="65"></div>
                            </div>
                        </div>
                    </div>
                    <p class="iphone-point-Simulation_Point-total-reset c-Link_Txt" @click="selectReset()" data-ratid="campaign_iphone-point_simulation_reset" data-ratevent="click" data-ratparam="all">選択した条件をリセットする</p>
                </div>
            </section>
        </div>

        <div id="check1-1" data-ratid="campaign_iphone-point_simulation-check1-1" data-ratevent="click" data-ratparam="all"></div>
        <div id="check1-2" data-ratid="campaign_iphone-point_simulation-check1-2" data-ratevent="click" data-ratparam="all"></div>
        <div id="check2-1" data-ratid="campaign_iphone-point_simulation-check2-1" data-ratevent="click" data-ratparam="all"></div>
        <div id="check2-2" data-ratid="campaign_iphone-point_simulation-check2-2" data-ratevent="click" data-ratparam="all"></div>
        <div id="check2-3" data-ratid="campaign_iphone-point_simulation-check2-3" data-ratevent="click" data-ratparam="all"></div>

        <div class="iphone-point-Simulation_Cta u-Adjust_Mt-16 u-Adjust_Mt-pc-32" >
            <div><a href="/guide/application/?lid-r=campaign_iphone-point_guide_application-01" class="c-Btn_Primary"><span>今すぐ申し込む</span></a></div>
            <div><a href="/product/iphone/?l-id=campaign_iphone-point_product_iphone" class="c-Btn_Secondly"><span>iPhone一覧を見る</span></a></div>
        </div>

        <p class="c-Txt_Cap iphone-point-Simulation_Layout u-Adjust_Mt-24">
            *1 ポイント還元は「<a href="#campaign-rule2091" class="c-Link_Txt js-scroll" data-ratid="campaign_iphone-point_sim-rule-2091" data-ratevent="click" data-ratparam="all">【Rakuten最強プランはじめてお申し込み特典】他社から乗り換えでポイントプレゼント</a>」適用時。<br>
            *2 ポイント還元は「<a href="#campaign-rule2142" class="c-Link_Txt">【Rakuten最強プランはじめてお申し込み特典】新規ご契約・プラン変更（移行）で2,000ポイントプレゼントキャンペーン</a>」適用時。<br>
            *3 ポイント還元は「<a href="#campaign-rule1819" class="c-Link_Txt js-scroll" data-ratid="campaign_iphone-point_sim-rule-1819" data-ratevent="click" data-ratparam="all">iPhone 対象端末ポイントバックキャンペーン</a>」適用時。<br>
        </p>
    </div>
</template>

<script>
import {campaign_point_simulation} from '../../../js/csv-data/campaign-point-simulation';
export default {
    name: 'Simulation',
    data() {
        return {
            simulationData: [],
            select1: '',
            select2: '',
            selectProduct: '',
            selectPayment: '',
            selectTradein: '',
            totalPoint: '---',
            select1Point: 0,
            select2Point: 0,
            productPoint: 0,
            product1point: 0,
            product2point: 0,
            product3point: 0,
            product4point: 0,
            paymentPoint: 0,
            payment1point: 0,
            payment2point: 0,
            tradeinPoint: 0,
            tradein1point: 0,
            tradein2point: 0,
            tradein3point: 0,
            selectNote:'',
            selec2tNote:'',
            productNote: '',
            paymentNote: '',
            payment1note: '',
            payment2note: '',
            tradeinNote: '',
            tradein1note: '',
            tradein2note: '',
            tradein3note: '',
            totalNote:'',
            product1note: '',
            product2note: '',
            product3note: '',
            product4note: '',
            select2Disabled: true,
            productDisplay: false,
            paymentDisplay: false,
            tradeinDisplay: false,
            location: {
                pathname: window.location.pathname
            },
            //　イレギュラー対応（暫定）
            iphone14_15select: false,
            iphone14_15_point: 20000,
            iphone14_15_note: 4
        }
    },
    created() {
        this.simulationData = campaign_point_simulation;
    },
    updated() {
        console.log('update選択・1のポイント' + this.select1Point);
        console.log('update選択・製品のポイント' + this.productPoint);
        console.log('update選択・支払いのポイント' + this.paymentPoint);
        console.log('update選択・下取りのポイント' + this.tradeinPoint);
        console.log('ーーーーーーーーーー');
    },
    methods: {
        selectReset(){
            this.select1 = '';
            this.allReset();
        },
        allReset() {
            console.log('all reset');
            this.radioProductReset();
            this.radioPaymentReset();
            this.radioTradeinReset();
            this.select2Disabled = true;
            this.productDisplay = false;
            this.paymentDisplay = false;
            this.tradeinDisplay = false;
            this.select2 = '';
            this.select1Point = 0;
            this.productPoint = 0;
            this.paymentPoint = 0;
            this.tradeinPoint = 0;
            this.selectNote = '';
            this.select2Note = '';
            this.calucrationTotalPoint(true);
        },
        radioProductReset() {
            console.log('radio product reset');
            document.querySelectorAll('.js-radio-product').forEach((elem) => {
                console.log(elem);
                elem.checked = false;
            });
            this.productNote = '';
        },
        radioPaymentReset() {
            console.log('radio payment reset');
            document.querySelectorAll('.js-radio-payment').forEach((elem) => {
                console.log(elem);
                elem.checked = false;
            });
            this.paymentNote = '';
        },
        radioTradeinReset() {
            console.log('radio tradein reset');
            document.querySelectorAll('.js-radio-tradein').forEach((elem) => {
                console.log(elem);
                elem.checked = false;
            });
            this.tradeinNote = '';
        },
        selectQ1() {
            console.log('選択1' + this.select1);
            if ( this.select1 !== '' ) {
                this.simulationData.forEach((item) => {
                    if ( item.control_name.trim() === this.select1 ) {
                        this.select1Point = Number(item.point);
                        this.selectNote = item.note.trim();
                    }
                });
                this.radioProductReset();
                this.radioPaymentReset();
                this.radioTradeinReset();
                this.select2Disabled = false;
                this.productDisplay = false;
                this.paymentDisplay = false;
                this.tradeinDisplay = false;
                this.select2 = '';
                this.select2Note = '';
                this.select2Point = 0;
                this.productPoint = 0;
                this.paymentPoint = 0;
                this.tradeinPoint = 0;
                this.calucrationTotalPoint();
            } else {
                this.allReset();
            }

           // ratId
            switch (this.select1) {
                case 'はじめてのお申し込み':
                    document.getElementById('check1-1').click();
                    break;
                case '2回線目以降のお申し込み':
                    document.getElementById('check1-2').click();
                    break;
                default:
                    break;
            }
        },
        selectQ2() {
            console.log('選択2' + this.select2);
            this.radioProductReset();
            this.radioPaymentReset();
            this.radioTradeinReset();
            this.productPoint = 0;
            this.paymentPoint = 0;
            this.tradeinPoint = 0;
            this.simulationData.forEach((item) => {
                if ( this.select1 === item.q1.trim() &&  this.select2 === item.select1.trim() ) {
                    this.select2Point = Number(item.q2_point);
                    this.select2Note = item.q2_note.trim();
                    this.product1point = Number(item.product1_point);
                    this.product2point = Number(item.product2_point);
                    this.product3point = Number(item.product3_point);
                    this.product4point = Number(item.product4_point);
                    this.product1note = item.product1_note.trim();
                    this.product2note = item.product2_note.trim();
                    this.product3note = item.product3_note.trim();
                    this.product4note = item.product4_note.trim();
                }
            });
            if ( this.select2 !== '' ) {
                this.productDisplay = true;
                this.paymentDisplay = false;
                this.tradeinDisplay = false;
            } else {
                this.select2Point = 0
                this.productPoint = 0;
                this.paymentPoint = 0;
                this.tradeinPoint = 0;
                this.productDisplay = false;
                this.paymentDisplay = false;
                this.tradeinDisplay = false;
            }
            this.calucrationTotalPoint();
            // ratId
            switch (this.select2) {
                case '他社からの乗り換え（MNP）':
                    document.getElementById('check2-1').click();
                    break;
                case '新しい電話番号で申し込む':
                    document.getElementById('check2-2').click();
                    break;
                case '楽天モバイル（ドコモ回線・au回線）からプラン変更（移行）':
                    document.getElementById('check2-3').click();
                    break;
                default:
                    break;
            }
        },
        selectProductPoint(text) {
            console.log('選択製品' + this.selectProduct);
            const product = this.selectProduct;
            this.productPoint = Number(this[`${product}point`]);
            this.productNote = this[`${product}note`];

            // イレギュラー対応（暫定）処理（CSV化できず）
            if(this.selectProduct === 'product1') {
                this.payment1point = this.iphone14_15_point;
                this.payment1note = this.iphone14_15_note;
                this.iphone14_15select = true;
            } else {
                this.iphone14_15select = false;
                this.simulationData.forEach((item) => {
                    if ( item['control_name'].trim() === "買い替え超トク（48回払い）" ) {
                        this.payment1point = Number(item.point);
                        this.payment1note = item.note.trim();
                    }
                    if ( item['control_name'].trim() === "一括／24回払いで購入" ) {
                        this.payment2point = Number(item.point);
                        this.payment2note = item.note.trim();
                    }
                });
            }

            this.paymentDisplay = false;
            this.paymentPoint = 0;
            this.tradeinPoint = 0;
            this.tradeinDisplay = false;
            this.radioTradeinReset();
            this.radioPaymentReset();
            this.calucrationTotalPoint();
        },
        selectPaymentPoint() {
            console.log('選択支払い' + this.selectPayment);
            if(this.iphone14_15select && this.selectPayment === '買い替え超トク（48回払い）') {
                this.paymentPoint = this.payment1point;
                this.paymentNote = this.payment1note;
            } else {
                this.simulationData.forEach((item) => {
                    if ( item['control_name'].trim() === this.selectPayment ) {
                        this.paymentPoint = Number(item.point);
                        this.paymentNote = item.note;
                    }
                    if ( item.q3.trim() === this.selectPayment) {
                        this.tradein1point = Number(item.tradein1_point);
                        this.tradein2point = Number(item.tradein2_point);
                        this.tradein3point = Number(item.tradein3_point);
                        this.tradein1note = item.tradein1_note.trim();
                        this.tradein2note = item.tradein2_note.trim();
                        this.tradein3note = item.tradein3_note.trim();
                    }
                });
            }

            this.tradeinDisplay = false;
            this.tradeinPoint = 0;
            this.radioTradeinReset();
            this.calucrationTotalPoint();
        },
        selectTradeinPoint() {
            switch (this.selectTradein) {
                case '主要な下取り対象製品':
                this.tradeinPoint = this.tradein1point;
                this.tradeinNote = this.tradein1note;
                    break;
                case 'その他の下取り対象製品':
                this.tradeinPoint = this.tradein2point;
                this.tradeinNote = this.tradein2note;
                    break;
                case '下取り利用しない':
                this.tradeinPoint = this.tradein3point;
                this.tradeinNote = this.tradein3note;
                    break;
                default:
                    break;
            }
            console.log('選択支払い' + this.selectTradein);
            this.calucrationTotalPoint();
        },
        calucrationTotalPoint(resetflag) {
            console.log('合計計算するよー');
            const total = this.select1Point + this.select2Point + this.productPoint + this.paymentPoint + this.tradeinPoint;
            ( resetflag ) ?  this.totalPoint = '---' :  this.totalPoint = total.toLocaleString();

            let totalNote = [];
            totalNote = [this.selectNote, this.select2Note, this.productNote, this.paymentNote, this.tradeinNote];
            totalNote = totalNote.filter((s)=> {return s !== '';} );const uniqueTotalNote = [];
            totalNote.forEach((s) => {
            if (!uniqueTotalNote.includes(s)) {
                uniqueTotalNote.push(s);
                }
            });
            totalNote = uniqueTotalNote
            console.log(totalNote);
            ( totalNote == '' ) ? this.totalNote = '' : this.totalNote = '*' + totalNote.join(',');
        },
    },
    filters: {
        addComma (value) {
            return value.toLocaleString();
        }
    },
}
</script>

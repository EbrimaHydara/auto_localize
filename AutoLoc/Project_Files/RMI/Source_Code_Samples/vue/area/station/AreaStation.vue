<template>
    <div>
        <p class="u-Adjust_Align-right u-Adjust_Mt-24">{{ lastUpdate }}更新</p>
        <div class="c-Theme-Light area-station-Layout_Theme" id="js-select-top">
            <div class="area-station-Layout_Select">
                <div class="area-station-Layout_Select-item">
                    <h2 class="c-Heading_Lv3">地域を選択する</h2>
                    <div class="c-Form_Select u-Adjust_Mt-16">
                        <select v-model="selectedArea" @change="changeArea()">
                            <option value="">地域を選択</option>
                            <option v-for="( area, index ) in areaList" :key="index" :value="area">{{ area }}</option>
                        </select>
                        <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
                    </div>
                </div>
                <div class="area-station-Layout_Select-item">
                    <h2 class="c-Heading_Lv3">路線を選択する</h2>
                    <div class="c-Form_Select u-Adjust_Mt-16">
                        <select :disabled="lineDisabled" v-model="selectedLine" @change="changeLine()">
                            <option value="">路線を選択</option>
                            <option v-for="( line, index ) in lineList" :key="index" :value="line">{{ line }}</option>
                        </select>
                        <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="routeList.length > 0" class="area-station-Layout_Result" id="js-result-top">
            <div class="area-station-Layout_Result-inner">
                <div class="area-station-Layout_Route">
                    <div class="c-Theme-Light u-Adjust_Mt-16">
                        <dl class="area-station-Layout_Route-label-info">
                            <div>
                            <dt><span class="area-station-Layout_Route-label-lte"></span></dt>
                            <dd class="c-Txt_Emp-01">楽天モバイルをご利用いただける駅・駅間<span class="c-Txt_Cap">※</span></dd>
                            </div>
                        </dl>
                    </div>
                    <p class="c-Txt_Cap u-Adjust_Mt-16">※データ高速無制限エリアであっても、遮蔽物、使用製品等の利用環境の影響で電波が弱く、通信・通話が制限される箇所があります。</p>
                </div>
                <div>
                    <h2 class="c-Heading_Lv2 u-Adjust_Mt-40">{{ selectedLine }}</h2>
                    <div class="area-station-Layout_Route">
                        <ul>
                            <template v-for="(route, index) in routeList">
                                <li :key="index" :class="getItemStyle(route)" v-if="route['branch'] ==='' || route['branchStart'] !==''">
                                    <span class="area-station-Layout_Route-code">
                                        {{ route['code'] }}
                                    </span>
                                    <span v-if="isStation(route['between'])" class="area-station-Layout_Route-station">
                                        {{ route['station'] }}
                                    </span>
                                    <span class="area-station-Layout_Route-4g">
                                        <span :class="getLabelStyle(route['4g'])">
                                        </span>
                                    </span>
                                    <div v-if="route['branchStart']" class="area-station-Layout_Route-branch-link">
                                        <a :href="route.link" class="c-Link_Txt-icon-front js-scroll"><span class="c-Icon_Arrow-down-l"></span>{{getFilteredbranchListLast(route['branch']).station}}行はこちら</a>
                                    </div>
                                </li>
                                <li v-if="route['omit'] !== '' && route['omitStart'] !== ''" class="area-station-Layout_Route-item-section area-station-Layout_Route-item-section-omit">
                                    <span class="area-station-Layout_Route-omit-text">地上区間は屋外基地局の電波により利用可能<span>※1</span></span>
                                    <span class="area-station-Layout_Route-4g">
                                        <span class="area-station-Layout_Route-label-lte-after"></span>
                                    </span>
                                </li>
                            </template>
                        </ul>
                        <div v-if="convertBranchGroup.length > 0">
                            <div v-for="(group, index) in convertBranchGroup" :key="index" :id="getFilteredbranchListLast(group).id">
                                <h4 class="c-Heading_Lv2 u-Adjust_Mt-40">{{getFilteredbranchListLast(group).station}}行</h4>
                                <ul class="u-Adjust_Mt-16">
                                    <li v-for="(item, index) in getFilteredbranchList(group)" :key="index" :class="getItemStyle(item)">
                                        <span class="area-station-Layout_Route-code">
                                            {{ item['code'] }}
                                        </span>
                                        <span v-if="isStation(item['between'])" class="area-station-Layout_Route-station">
                                            {{ item['station'] }}
                                        </span>
                                        <span class="area-station-Layout_Route-4g">
                                            <span :class="getLabelStyle(item['4g'])">
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p class="u-Adjust_Mt-24">
                            <a href="#js-select-top" class="c-Link_Txt-icon-front js-scroll" style="margin-left: auto;">
                                <span class="c-Icon_Arrow-up-l"></span>
                                他の路線を選ぶ
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'whatwg-fetch';
import 'core-js/modules/es.promise';

export default {
    name: 'AreaStation',
    data() {
        return {
            lineMaster: [],
            areaList: [],
            lineList: [],
            routeList: [],
            branchGroup:[],
            branchLineList: [],
            selectedArea: '',
            selectedLine: '',
            omitGroup: [],
            lastUpdate: '',
            lineDisabled: true,
            scrollTop: false,
        }
    },
    created() {
        this.init();
    },
    updated() {
        if(this.routeList.length > 0) {
            this.scrollResultTop();
            if ( !this.scrollTop ) this.scrollTop = true;
        }
    },
    methods: {
        getJson: async function () {
            const res = await fetch('/assets/json/area-station.json');
            return res.ok ? await res.json() : [];
        },
        init(){
           const jsonData = this.getJson();
            jsonData
                .then(response => {
                    this.lineMaster = response;
                    this.lineDisabled = false;
                    this.setUpdatedDay(this.lineMaster);
                    this.setAreaList(this.lineMaster);
                    this.setSelectedArea();
                    this.setSelectedLine();
                    this.setLineList(this.selectedArea, this.lineMaster);
                    this.changeLine();
                })
                .catch(err => {
                    console.log(err);
                })
        },
        setUpdatedDay(list) {
            this.lastUpdate = list[0].update;
        },
        setSelectedArea(area) {
            this.selectedArea = area ? area : '関東';
        },
        setSelectedLine(line) {
            this.selectedLine = line ? line : '東京メトロ銀座線';
        },
        setAreaList(listArray) {
            const areaList = [];
            listArray.forEach(data => {
                areaList.push(data.area);
            });
            this.areaList = this.filterSet(areaList);
        },
        setLineList(area, listArray) {
            const lineList = [];
            listArray.forEach(data => {
                if(data.area === area) {
                    let lineName = this.getLineName(data);
                    lineList.push(lineName);
                }
            })
            this.lineList = this.filterSet(lineList);
        },
        changeArea() {
            this.selectedLine = '';
            this.routeList = [];
            if( this.selectedArea !== '' ) {
                this.setAreaList(this.lineMaster);
                this.setLineList(this.selectedArea, this.lineMaster);
                this.lineDisabled = false;
            } else {
                this.lineDisabled = true;
            }
        },
        changeLine() {
            this.selectedLine !== '' ? this.setRouteList() : this.routeList = [];
        },
        setRouteList() {
            const tempRoute = this.lineMaster.filter(item => {
                let lineName = this.getLineName(item);
                return lineName === this.selectedLine;
            });

            this.omitGroup = this.removeDuplicate(tempRoute, 'omit');
            this.setBranchGroup(tempRoute);
            this.setBranchLineList(tempRoute);

            const branchStartItem = [];
            this.branchGroup.forEach(group => {
                branchStartItem.push(this.branchLineList.find((value) => value['branch'] === group));
            })

            const branchLastItem = [];
            this.branchGroup.forEach(group => {
                branchLastItem.push(this.branchLineList.findLast((value) => value['branch'] === group));
            })

            const omitStartItem = [];
            this.omitGroup.forEach(group => {
                omitStartItem.push(tempRoute.find((value) => value['omit'] === group));
            })
            const omitEndItem = [];
            this.omitGroup.forEach(group => {
                omitEndItem.push(tempRoute.findLast((value) => value['omit'] === group));
            })

            this.routeList = this.createRouteList(tempRoute, branchStartItem, branchLastItem, omitStartItem, omitEndItem);
        },
        setBranchGroup(arrayList) {
            const branchData = arrayList.filter(item => item['branch'] !== '');
            const branchGroup = this.removeDuplicate(branchData, 'branch');
            this.branchGroup = branchGroup;
        },
        setBranchLineList(arrayList) {
            const branchData = arrayList.filter(item => item["branch"] !== '');
            this.branchLineList = branchData;
        },
        getLineName(elm) {
            return (elm['company'] === elm.line) ? elm.line : (elm['company'] + elm.line);
        },
        getFilteredbranchList(group) {
            return this.branchLineList.filter((item) => item['branch'] === group)
        },
        getFilteredbranchListLast(group) {
            const branchilist = this.branchLineList.filter((item) => item['branch'] === group);
            return {
                station: branchilist[branchilist.length - 1].station,
                last: branchilist.length,
                id : branchilist[0]['branch']
            }
        },
        getItemStyle(elm) {
            if(this.isStation(elm['between'])) {
                if(elm['branchStart']) {
                    return 'area-station-Layout_Route-item-station area-station-Layout_Route-item-station-branch';
                }else {
                    return 'area-station-Layout_Route-item-station';
                }
            }else {
                return 'area-station-Layout_Route-item-section';
            }
        },
        getLabelStyle(elm) {
            if (elm === 'データ高速無制限') {
                return 'area-station-Layout_Route-label-lte-after';
            } else {
                return '';
            }
        },

        createRouteList(tempRoute, branchStartItem, branchLastItem, omitStartItem, omitEndItem) {
            const routeList = [];
            let startItem, lastItem, linkItem, destination, omitStart, omitEnd;
            tempRoute.forEach(item => {
                let lineName = this.getLineName(item);
                startItem = lastItem = linkItem = destination = omitStart = omitEnd = '';
                branchStartItem.forEach(elm => {
                    if(elm['number'] === item['number']) {
                        startItem =  item['number'];
                        linkItem = '#' + item['branch'];
                    }
                });
                branchLastItem.forEach(elm => {
                    if(elm['number'] === item['number']) {
                        lastItem =  item['number'];
                        destination = item['station'];
                    }
                });
                omitStartItem.forEach(elm => {
                    if(elm['number'] === item['number']) {
                        omitStart = item['number'];
                    }
                });
                omitEndItem.forEach(elm => {
                    if(elm['number'] === item['number']) {
                        omitEnd = item['number'];
                    }
                });
                routeList.push({
                    'no': item['number'],
                    'code': item['code'],
                    'lineName' : lineName,
                    'station' : item['station'],
                    '4g': item['4g'],
                    'omit': item['omit'],
                    'omitStart': omitStart,
                    'omitEnd': omitEnd,
                    'branchStart': startItem,
                    'branchEnd': lastItem,
                    "between": item['between'],
                    'branch': item['branch'],
                    'link': linkItem,
                    'destination': destination
                })
            });
            return routeList;
        },
        createRelateObject(array, group, key) {
            const result = {};
            group.forEach((group) => {
                result[group] = group;
                array.forEach((item) => {
                    if(item[key] === group){
                        result[group].push(item);
                    }
                })
            });
            return result;
        },
        filterSet(arr) {
            return arr.filter((x, i, self) => self.indexOf(x) === i);
        },
        deleteSpace(item) {
            return item.trim();
        },
        removeDuplicate(itemArray, itemTitle) {
            const itemNewArray = itemArray.filter(item => item[itemTitle] !== '').map(item => item[itemTitle]);
            const itemNewArraySet = new Set(itemNewArray);
            return [...itemNewArraySet];
        },
        scrollResultTop() {
            if ( this.scrollTop ) {
                const target = document.getElementById('js-result-top');
                const rect = target.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const top =  rect.top + scrollTop;
                window.scrollTo({
                    top: top,
                    behavior: 'smooth',
                });
            }
        },
        isStation(item) {
            return (item === '駅') ? true : false;
        }
    },
    computed: {
        convertBranchList() {
            return JSON.parse(JSON.stringify(this.branchLineList));
        },
        convertBranchGroup() {
            return JSON.parse(JSON.stringify(this.branchGroup));
        },
    }
}
</script>

<template>
    <ul :class="`c-Link_List ${namespace}-Faq_Items`">
        <li v-for="item in faqList" :key="item.question + generateId()">
            <a :href="replaceLink(item.link)">
                <span :class="`${namespace}-Faq_Items-content`">
                    <span :class="`${namespace}-Faq_Items-text`">{{ item.question }}</span>
                    <span v-if="solvedValue(item.link)" :class="`c-Label_Normal ${namespace}-Faq_Items-label`">{{ solvedValue(item.link).toLocaleString() }}人以上の方が解決</span>
                </span>
                <span :class="`c-Icon_Chevron-right ${namespace}-Faq_Items-icon`"></span>
            </a>
        </li>
    </ul>
</template>

<script>
import axios from 'axios'

export default {
    props: ['userType', 'namespace', 'isInquiry'],
    data() {
        return {
            faqList: [],
            solvedList: [],
        }
    },
    async created () {
        const endpointMain = this.userType === 'member'
            ? {
                prod: 'https://network.mobile.rakuten.co.jp/api/top_faq/',
                dev: 'https://stg-network-mobile.rmb-lab.jp/api/top_faq/',
                local: '/assets/json/dummy_top_faq.json',
            }
            : {
                prod: 'https://network.mobile.rakuten.co.jp/api/top_faq_before/',
                dev: 'https://stg-network-mobile.rmb-lab.jp/api/top_faq_before/',
                local: '/assets/json/dummy_top_faq_before.json',
            };
        const endpointSolved = {
                prod: 'https://network.mobile.rakuten.co.jp/api/faq_solved/',
                dev: 'https://stg-network-mobile.rmb-lab.jp/api/faq_solved/',
                local: '/assets/json/dummy_faq_solved.json',
            }

        const api = axios.create();

        try {
            const [resMain, resSolved] = await Promise.all([
                // 本番用
                api.get(endpointMain.prod),
                api.get(endpointSolved.prod)

                // STG確認用(35)
                // api.get(endpointMain.dev),
                // api.get(endpointSolved.dev)

                // ローカル確認用
                // api.get(endpointMain.local),
                // api.get(endpointSolved.local)
            ]);

            const dataMain = await resMain.data;
            const dataSolved = await resSolved.data;
            console.log({dataMain, dataSolved, resMain, resSolved})

            const createList = () => {
                if (
                    resMain.status !== 200
                    || dataMain.code !== 'SUCCESS'
                    || resSolved.status !== 200
                    || dataSolved.code !== 'SUCCESS'
                ) {
                    return;
                }

                this.faqList = dataMain.list;
                this.solvedList = dataSolved.list;
            }

            await createList();
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        generateId() {
            const random = Math.random().toString(36).substring(2);
            const now = Date.now().toString(36);

            return random + now;
        },
        replaceLink(link) {
            if (!this.isInquiry) {
                return link;
            }
            const searchText = this.userType === 'member' ? /\?l-id=support_top_member_faq/g : /\?l-id=support_top_pre-member_faq/g;
            const replaceText = this.userType === 'member' ? '?l-id=support_inquiry_member_faq' : '?l-id=support_inquiry_pre-member_faq';
            return link.replace(searchText, replaceText);
        }
    },
    computed: {
        solvedValue() {
            return (link) => {
                const spreadLink = link.split('/');
                const qaId = spreadLink[spreadLink.length - 2];

                for (const qa of this.solvedList) {
                    if (qa.name === qaId) {
                        return qa.solved;
                    }
                }

                return null;
            }
        }
    }
};
</script>

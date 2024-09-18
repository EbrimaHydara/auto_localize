<template>
    <div class="support-Search_Suggest">
        <ul v-if="suggestItem !== undefined && suggestItem.length > 0" class="hikari-support-top-search_Search-suggestList">
            <li v-for="item of suggestItem" :key="item.id">
                <p>
                    <span class="hikari-support-top-search_Search-label">{{ item.url | createLabel }}</span>
                    <a v-if="item.url.indexOf('?')>0" :href="`${ path.sitedomain }${ item.url }&l-id=rhk_support_suggestion`">{{ item.title }}</a>
                    <a v-else :href="`${ path.sitedomain }${ item.url }?l-id=rhk_support_suggestion`">{{ item.title }}</a>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [
        'suggestItem'
    ],
    data() {
        return {
            path: {
                sitedomain : ''
            }
        }
    },
};
</script>

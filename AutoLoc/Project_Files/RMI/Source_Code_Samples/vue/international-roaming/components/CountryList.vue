<template>
    <div v-if="countryData" class="roaming-Countrylist u-Adjust_Mt-16">
        <div v-for="(region, regionKey, i) in countryData" :key="i" class="c-Accordion">
            <button
                :id="`accordion-${regionKey}`"
                class="c-Accordion_Trigger js-Accordion_Btn"
                aria-expanded="false"
                :aria-controls="`accordion-content-${regionKey}`"
            >
                <span class="c-Icon_Chevron-right c-Accordion_Arrow"></span>{{ region.name }}
            </button>
            <div
                :id="`accordion-content-${regionKey}`"
                class="c-Accordion_Panel js-Accordion_Panel"
                role="region"
                :aria-labelledby="`accordion-${regionKey}`"
                aria-hidden="true"
            >
                <ul class="roaming-Countrylist_Name">
                    <li v-for="(country, countryKey, j) in countryfilter(region.countries)" :key="j">
                        <label class="c-Form_Radio">
                            <input type="radio" name="country" :id="country | enName" :value="`${regionKey}`" @change="changing">
                            <span class="c-Form_Radio-icon"></span><span class="c-Form_Radio-label">{{ country | jpName }}</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CountryList',
    props: {
        countryData: {
            type: Object,
            required: true,
            default: () => {},
        },
    },
    updated () {
        this.setAccordionEvent();
    },
    filters: {
        enName :function (name) {
            const enName = name.split('.')[0];
            return enName;
        },
        jpName :function (name) {
            const jpName = name.split('.')[1];
            return jpName;
        },
    },
    methods: {
        countryfilter: function (data) {
            let countryArray = [];
            data.forEach(element => {
                countryArray.push(
                    element.country_name +'.'+ element.detail.Country_JP
                );
            });
            const countryNameData = countryArray.filter(function (x, i, self) {
                return self.indexOf(x) === i;
            });
            return countryNameData;
        },
        setAccordionEvent: function () {
            const $triggers = $('.js-Accordion_Btn');

            $triggers.each(function () {
                const $self = $(this);
                const $panel = $('#' + $self.attr('aria-controls'));
                const opt = {
                    duration: 200,
                    queue: false
                };

                $panel.hide();

                $self.on('click', function () {
                    if ($self.attr('aria-expanded') === 'true') {
                        $self.attr('aria-expanded', 'false');
                        $panel.attr('aria-hidden', 'true');
                        $panel.stop().slideUp(opt);
                    } else {
                        $self.attr('aria-expanded', 'true');
                        $panel.attr('aria-hidden', 'false');
                        $panel.stop().slideDown(opt);
                    }
                });
            });
        },
        changing: function (e) {
            this.$emit('countryChange', e.target.value, e.target.id);
        }
    }
}
</script>

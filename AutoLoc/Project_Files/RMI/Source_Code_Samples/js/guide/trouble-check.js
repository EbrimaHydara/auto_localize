import 'core-js/modules/es.promise'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../../vue/guide/trouble-check/App.vue'
import DrillDown from '../../vue/guide/trouble-check/pages/DrillDown.vue'
import Solutions from '../../vue/guide/trouble-check/pages/Solutions.vue'
import Error from '../../vue/guide/trouble-check/pages/Error.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: '/guide/trouble-check/',
  routes: [ 
    { path: `/:tabId?`, component: DrillDown, name: 'entry' },
    { path: `/:tabId/:stepId?`, component: DrillDown, name: 'drill-down' },
    { path: `/:tabId/:stepId/solution`, component: Solutions, name: 'solution' },
    { path: '/error', component: Error, name: 'error' },
  ],
  scrollBehavior(to, from) {
    const shouldScrollTop = to.name === 'solution' || from.name === 'solution'
    if (shouldScrollTop) {
      return { 
        x: 0, 
        y: 0,
        behavior: 'smooth',
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#trouble-check')

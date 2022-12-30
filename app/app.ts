import Vue from 'nativescript-vue'
import Home from './components/FlightSearch.vue'
import { localize } from '@nativescript/localize'

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

Vue.filter('L', localize)

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()

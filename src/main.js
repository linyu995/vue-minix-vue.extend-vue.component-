import Vue from 'vue'
import App from './App.vue'
import ANT from './util/direactiveOne'
import Pluign from './util/pluginvue'
Vue.use(ANT)
Vue.use(Pluign)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

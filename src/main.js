import Vue from 'vue'
import App from './App.vue'
import MyButton from './components/Button/index'
import MyProgress from './components/Progress/index'

Vue.config.productionTip = false
Vue.use(MyButton)
Vue.use(MyProgress)

new Vue({
  render: (h) => h(App)
}).$mount('#app')

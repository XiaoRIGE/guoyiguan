import Vue from 'vue'
// import { MessageBox, Row, Col, Button, Input, Loading, Dialog, Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Avatar from './components/avatar.vue'
// import Index from './index.vue'//原demo
import APP from './App.vue'
import store from './store/index'
import router from './router/index'
import tim from 'tim'
import TIM from 'tim-js-sdk'
import './assets/icon/iconfont.css'
import './assets/icon/tim.css'

window.tim = tim
window.TIM = TIM
window.store = store
Vue.prototype.$bus = new Vue() // event Bus 用于无关系组件间的通信。
Vue.prototype.tim = tim
Vue.prototype.TIM = TIM
Vue.prototype.$store = store
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.use(Button)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Input)
// Vue.use(Loading)
// Vue.use(Dialog)
// Vue.use(Dropdown)
// Vue.use(DropdownMenu)
// Vue.use(DropdownItem)
Vue.use(ElementUI);
Vue.component('avatar', Avatar)
new Vue({
  router,
  render: h => h(APP)
}).$mount('#app')

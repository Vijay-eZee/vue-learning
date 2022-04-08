import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './assets/styles.css'
import Default from '@/layouts/Default'
import Admin from '@/layouts/Admin'
import 'material-icons/iconfont/material-icons.css';
import axiosPlugin from '@/plugins/axios.plugin'
import veeValidatePlugin from '@/plugins/vee-validate.plugin'
import injectComponentPlugin from '@/plugins/inject-component.plugin'
import store from '@/store'
const app = createApp(App)
app.use(axiosPlugin)
app.use(veeValidatePlugin)
app.use(router)
app.use(store)
app.use(injectComponentPlugin)
app.component('default-layout',Default)
app.component('admin-layout',Admin)
app.mount('#app')



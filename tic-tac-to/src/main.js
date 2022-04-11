import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import 'material-icons';
import router from './routing'
import store from './store';
import AuthLayout from './layouts/AuthLayout.vue'
import ErrorLayout from './layouts/ErrorLayout.vue'
const app = createApp(App)
app.component('AuthLayout', AuthLayout)
app.component('ErrorLayout', ErrorLayout)
const requireComponent = require.context(
    './components/core',
    false,
    /Base[A-Z]\w+\.(vue)$/
)
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    app.component(fileName, componentConfig)
});

app.use(router)
app.use(store)
app.mount('#app')


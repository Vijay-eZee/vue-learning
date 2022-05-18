import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import Logger from './plugins/logger'
import globalComponent from './plugins/globalComponent'
import globalDirective from './plugins/globalDirective'
import langTranslate from './plugins/langTranslate'
import socketio from './plugins/socketio'
const app = createApp(App)
app.use(Logger)
app.use(globalComponent)
app.use(globalDirective)
app.use(socketio)
app.use(langTranslate, {
    greetings: {
        hello: 'Bonjour!',
        good:'motning'
      }
})
app.mount('#app')
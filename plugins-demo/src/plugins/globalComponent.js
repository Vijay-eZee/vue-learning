// plugins/i18n.js
import Button from '../components/Button.vue'
import InputField from '../components/InputField.vue'
export default {
    install: (app) => {
        app.component('button-component', Button)
        app.component('input-field',InputField)
    }
  }
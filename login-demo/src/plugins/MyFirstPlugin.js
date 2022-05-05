import header from '../components/Header.vue'
export default {
    install: (app) => {
        /*  our code for the plugin goes here 
                app is the result of createApp()
                options is user options passed in        
            */
        app.component('header-component', header)
        console.log('my first plugin')
    },
};
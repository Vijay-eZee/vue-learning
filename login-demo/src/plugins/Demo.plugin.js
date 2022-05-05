export default {
    install: (app) => {
        /*  our code for the plugin goes here 
                app is the result of createApp()
                options is user options passed in        
            */
        const logger = (content) => {
            console.log('#########log start########')
            console.log(content);
            console.log('#########log end########')
        };
        app.provide('logger', logger)

    },
};
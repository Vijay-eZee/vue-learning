// plugins/i18n.js
export default {
    install: (app) => {
        const logger = (content) => {
            console.log('#########log start########')
            console.log(content);
            console.log('#########log end########')
        };
        app.provide('logger', logger)
    }
  }
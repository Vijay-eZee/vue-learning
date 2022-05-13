export default {
    install: (app, options) => {
        app.config.globalProperties.$translate = (key) => {
            return key.split('.').reduce((o, i) => {
                console.log(o)
                console.log(i)
                if (o) return o[i]
              }, options)
        }
    }
}
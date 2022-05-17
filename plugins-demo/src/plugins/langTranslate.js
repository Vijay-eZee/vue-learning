export default {
    install: (app,options) => {
        app.config.globalProperties.$translate = (key) => {
            // retrieve a nested property in `options`
            // using `key` as the path
            console.log(key.split('.'))
            return key.split('.').reduce((o, i) => {
                console.log(o)
                console.log(i)
              if (o) return o[i]
            }, options)
        }
        app.config.globalProperties.$fact = (key) => {
            console.log(key)
            // retrieve a nested property in `options`
            // using `key` as the path
           
            return key.charAt(0).toUpperCase() + key.slice(1);
          }
    }
  }
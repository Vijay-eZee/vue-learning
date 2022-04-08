import _ from 'lodash'

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18446
// TODO: ts에서 context가 없다고 떠서 ts-ignore로 무시해둠.
// @ts-ignore

export default{
    install:(app)=>{
        const components = require.context('@/components/core/', true, /.(vue)$/)
        _.forEach(components.keys(), (fileName) => {
          const componentConfig = components(fileName)
          const componentSplit = fileName.split('/')[1]
          const componentName = componentSplit.split('.')[0]
          app.component(componentName, componentConfig.default || componentConfig)
        })
    }
}
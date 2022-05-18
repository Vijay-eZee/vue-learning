// plugins/i18n.js
const placeholder = {
    mounted: (el,binding) => {
        el.placeholder = binding.value.placeholder;
        el.style.color = binding.value.color;
        el.style['font-style']=binding.value.fontStyle;
        // el.placeholder = 'enter text 123';
        // el.style.color = 'red';
        // el.style['font-style'] = 'oblique';
        
    },
    
}
const btnText = {
    mounted: (el) => {
        el.style.color = 'green';
        el.style['font-style'] = 'oblique;';
        
    },
}
  
export default {
    install: (app) => {
        app.directive('placeholder', placeholder)
        app.directive('btnText',btnText)
    }
  }
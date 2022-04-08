import {defineRule,configure } from 'vee-validate'
import {required, email,min} from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n';
import en from '@/locale/en'
import validatores from '@/plugins/validators'
//import ko from '@/locale/ko'
export default{
    install:()=>{
        configure({
            generateMessage:localize('en',en) ,
          });
        
        defineRule('required',required);
        defineRule('email',email);
        defineRule('min',min)
        validatores.forEach((validator)=>{
         defineRule(validator.name,validator.rule)
        })
    }
}
const confirmPasswordRule=(value,[target],ctx)=>{
        console.log('validate--->')
        if (value === ctx.form[target]) {
            return true;
          }
          return false
    }

export default{
name:'confirmed',
rule: confirmPasswordRule
}

export function createPerson(name){
    return {
     name: name,
     greet: function() {console.log("Hello, I'm" + this.name);}
   }
}

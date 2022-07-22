let person = {
    firstName: 'John',
    lastName: 'Doe',
    display: function () {
        console.log('first name->' + this.firstName)
        console.log('last name->'+this.lastName)
    }
};
person.display('tejas','shah')
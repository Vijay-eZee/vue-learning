
const displayMessage = function (a, b, fn) {
    
    console.log('###content-->'+fn(a,b,sum))
}
const sum = function (a, b) {
    return a+b
}
const avg = function (a, b,fn) {
             return fn(a,b)/2
}
displayMessage(10,15,avg)
//displayMessage(ans)
___________________________________________

const displayMessage =  function(content) {
    console.log('###content-->'+content)
}
const sum = function (a, b,fn) {
    setTimeout(() => {
        return fn(a+b,displayMessage)    
    },3000)
    
}
const avg=function(ans,fn){
    return fn(ans/2)
}
let sumAns = sum(10, 15,avg)
//let avgAns= avg(sumAns)
//displayMessage(sumAns)
______________________________________________
let products = [
    { name: 'iPhone', price: 900 },
    { name: 'Samsung Galaxy', price: 850 },
    { name: 'Sony Xperia', price: 700 },
];
const displayProduce = function () {
      console.log(products)
}
const shortProductList = function (fn) {
    products.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        } else {
            return -1
        }
    })
    fn()
}
//displayProduce()
shortProductList(displayProduce)
___________________________________________
//1-cmInch 2-inchCM
const convert = function (num, fn) {
    if (num > 0) {
        num = Math.floor(num)
        return fn(num)
    }
}
const cmToInch = function (num) {
        return num*0.393701
}
const cmToFeet = function (num) {
    return num * 0.0328084
}
console.log(convert(100, cmToInch))
console.log(convert(100,cmToFeet))
__________________________________________
_const greet = function (greeting) {
    return function(seprator){
        return function (name) {
            return function (terminate) {
                console.log(greeting + seprator + name+ terminate);        
            }
            
        }
    }
    
};
greet("Hello")('**')('Navin')('.'); //"Hello, Heidi"
greet("Welcome")(':')('Navin')('?'); //"Hello, Heidi"
greet("Hello")(' ')('Navin')('<'); //"Hello, Heidi"


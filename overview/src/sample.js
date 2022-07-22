const numbers = [45, 4, 9, 100];
numbers.test='bed'
console.log(numbers.length)
// numbers.forEach((val, index) => {
//     console.log('key-->'+index+' value-->'+val) ;
// })
for (let x in numbers) {
    console.log('key-->'+x+' value-->'+numbers[x]) ;
}

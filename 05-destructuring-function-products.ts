// Destructuracion de arreglos

//  first we create an interface

interface Producto {
    desc: string,
    price: number
}


//  We create two instances of the interface producto 
const phone: Producto = {
    desc: 'Iphone',
    price : 200
}

const tablet: Producto = {
    desc: 'Iphone',
    price : 200
}
// We create a function that take an array of the type Product (instances of the Procto interface)

//  We specify that the output of the function is gonna be an array of numbers with the number and [] after it 
function calcuTax(productos : Producto[]): number[]{
    let total = 0
//  We can destructure from the array were passing using curly braces on the callback argument, instead of use a random number we acces to the property inside the curly braces 
    productos.forEach( ({price}) => {
        total += price;
    })
// We can return an Array of two numbers
    return [total , total * 0.15]
}

//  We create the array of that were gonna be passing as arguments 
const items = [phone, tablet]

//  Before destructuring 

//  We assign the product of the function calcuTac to the const name ivs which return qan arry with two numbers 

// const ivs = calcuTax(items)

//  With destructuring 

//  We can directly destructure the return value of the function calcuTac creating variable name for each value inside the array 

const [total, ivs] =calcuTax( items )

//  Then we can use those variables instead instead of accesing them with breacket notarion 

console.log('Tax', ivs)
console.log('Total', total)


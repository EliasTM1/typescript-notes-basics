//  Homework == Create a interface

//  in case that we have an object inside of an interface we always should creat another interface to avoid nestring 

//  In this we want to extrac Address and creat another interface with it 

// interface SuperHeroe {
//     name : string;
//     age: number;
//     address : {
//         street : string
//         country : string
//         city: string
//     }
    
//     showAddress: () => string
 
// }


//  Instead of havind a nested object we create another interface and we we could refer the property type to it in order to access it, 

//  Note how Address instead of hold a primitive it holds the value of the interface Address

interface SuperHeroe {
    name : string;
    age: number;
    address : Address
    showAddress: () => string

}

interface Address {
    street : string
    country : string
    city: string
}

const superJiro : SuperHeroe = {
    name : 'Spider-man',
    age: 30,
    address : {
        street: '1900 N brevard St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return `${this.name} is ${this.age} and lives on ${this.address.street} of ${this.address.country} on ${this.address.city}`
    }

}

const direccion = superJiro.showAddress()

console.log(direccion)
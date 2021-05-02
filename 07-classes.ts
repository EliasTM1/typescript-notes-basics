//   Classes and Interfaces look really similar

import { textChangeRangeIsUnchanged } from "typescript";

class HeroeDos {
    // Theres also different types of propesties inside a class we can have private, public and staric propresties, this change their behavior when creating instances of classes this types only belong to typescript
    name: string;
    age: number;
    realName: string;
    printID() {
        return `The identity of this dude is ${this.name},${this.age},${this.realName}`
    }
}
//  The main difference between the two is that inside an interface you can just specify the existence of a method and the type of their output but you cant define the method inside it 
interface HeroeDos {
    name: string;
    age: number;
    realName: string;
    printID: () => string
}
const elkias = new HeroeDos
console.log(elkias)

//  When working with typescript instad of defining a class like we would in JS it is important to note that commonly we would just write as parameters with a public acces level all their properties 

// 2da parte 

class HeroesTres {
    constructor (
        public name : string,
        public age : number,
        public type : string
    ){}
}


//  If we try to pass a different type of primite as defined we would get an error. 
const manzano = new HeroesTres('Elias', 27,'nonHero')
console.log(manzano)

// 3ra Parte 

//  How tpo extend a class, 
//  In order to extend a class from another we need to add the reserved worw 'extend'

class NormalDude extends HeroesTres{
    //  to remove errors we need to call the 'super()'
    constructor(
    public nombre: string,
    public address: string
    ){
        //  super refers to the constructor function of the class that extends 
        super('Elias',27, 'RegularDude')
    }
}

const elChavo = new NormalDude('El chavo','Vive en un barril')

console.log(elChavo)
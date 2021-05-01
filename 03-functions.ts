// Funciones

// When we define a function in TS is really important to pass the type of the argument when defining the function 

// This is a basic JS function 

function add (a,b){
    return a + b
}

// When an argunment is not defined at the time of invoking the function, the value will be equivalent to undefined

// On TS we tend to definer the type of the arguments and the type of the output of the function 

function addTsFunction (a:number, b:number):number {
    return a + b;
}

// At this time the arguments of the functions are defined as required, if for some reason we do not pass the arguments when invoking the function, TS will throw an error

// Arrow Functions

// In the case of Arrow we the definitios of the arguments and the type of return are done the same way 

const sumArrowTs = (a:number, b:number):number =>  {
return a + b
}

//  Argument Order

//  We can also create optional arguments and this is done by adding a question Mark after naming theargument 

function addTwoOrThree (a:number, b:number, c?:number ){
    return a + b + c
}

// On the function above c is the optional argument, if we call the function without it we would not get a NaN

// We can also define arguments with default values in case is not provided 

// NOTE: It is important the order of how we define the arguments, /// 1.0 we need to definer the mandatory arguments
// 2.0 Then we need to define the optional arguments
// 2.5 We cannot place an optional argument before a mandatory one 

// 3.0 In order to define a default value for an argument we can do it on like this 

function multiplyByTwoDefault (a:number , b?:number , c:number = 2){
return a * b * c
}

// If we call multiplyByTwoDefault with two arguments 

console.log(multiplyByTwoDefault(2,5)) // This returns 20

//  This is beacuse on this case a = 2 , b = 5 , c = (Default value  = 2)

//  In order to rewrite the default value we would need to provide the 3 arguments 

console.log(multiplyByTwoDefault(2,5,10)) // return 100


// 2da Parte functions 

// Whenever we create an interface we can specify that a value will be of the type of that interface like this

interface LORCharactert {
    name: string,
    life: number,
    // We can also define a method inside of the the interface, (If we try to define on an instance we will get an error) method get defined like this 
    showResumeHealth: () => void;

    //  We can define it as much as we like and always avoiding to let the method accept 'any' type of data type

    // If we want ot make optional we just add a question mark after the number
}

//  Here we pass the interface created above as a type, the argument need to be an instance of this type in order to be accepted

function heal(character : LORCharactert , healPoints: number ): void{
// void is used when we do not want to return anything from the function
// We can also define the output that the function is gonna have

    character.life += healPoints
    console.log(character)
}


// Then we create a new charather fo the type LORCharactert like this 
const hobbit : LORCharactert = {
    name:  'Frodo',
    life:  30,
    //  note that we use arrow function the 'this' Keyword would refer to the global scope.
    showResumeHealth () {
        console.log(`The life of this dude ${this.name} is ${this.life}`)
    } 
}

//  Then we call the function heal, and we pass the characther and the points we need to heal him, note that if the character that we pass is not of the type 'LORCharactert' this will create a TS error

heal(hobbit,200)


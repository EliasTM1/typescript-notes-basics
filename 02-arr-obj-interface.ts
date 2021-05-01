
// We can define the type of data types that the array is gonna take, by default the type is 'any' meaning that this can take any type of dataType, we try to avoid this on typeScript and we tend to predefine the dataTypes that any structur will cointain, for example


let habil: (string | number) [] = ['Elias', 27];

// In case that we do not definer the types of data accepted for any data structure, TypeScript will try to create this pon the backgrground

// If you hover on the variable name you will se the data types that are accepted 

let conocido = [true , "string", 25];


//  When working with object in TS we can specify the type of each key creating something called interface, an interface works like a template where we can specify the dataTypes of our object properties 


// Take for instance this OBJ literal

const characher ={
    name : 'Elias',
    health: 100,
    habilities : ['eat','smoke','live']
}

//  If we want te create an interface for this object in order to only accepts the dataTypes that we want we would need to define an interface like this

//  Note that the interface always starts with a CAPITAL LETTER

interface CharachterOne{
    //  We can end with a coma or with a semi-colon
    name: string,
    health: number;
    habilities: string[]; // Here were saying that this is gonna be a an Array of string, we could define different data Types like this 
    habilitiesLevel: (string | number)[];
    // In order to create an optional vale we just need to ad an question mark at the end of the name of the propertie
    optionalValue?: string;
    //  We should always prevent to use 'any' to prevent any type of datatype to be accepted
    anyType?: any;
}

//  In order to create an instance of this interface, we need to include it after we name the object and before we start assigning the values


//  In case that we do not call all the mandatory properties, typeScript will let us know, and if we hover over the variable name we can see the properties we need to define in order to create an instance whitout error

let elias: CharachterOne = {
    name: 'Elias',
    health: 150,
    habilities: ['Smoke','Code','Sleep','MorningSmoke',],
    habilitiesLevel: ['Smoke',100],
    optionalValue: 'Optional Smoke Before Meals'
}

//  if we later need to define a propertie this would not be possible if the propertie is not pre-define as a optional propertie

// This line will throw an error beacuse is not predefine as an optional value on the interface

// elias.vehicle = 'Ferrari'

//  If we want to use a predefine propertie we just say:

elias.anyType = 'Que paso Chulo'

//  If we console.log elias we would be able to see all the values with no errors

console.table(elias)



//  optional chaining 

interface Pasajero {
    name: string,
    childs?: string[]
}

const primer:Pasajero={
    name: 'Elias'
}

const segundo: Pasajero ={
    name: 'EliasB',
    childs: ['EliasC', 'El Barto']
}

function printChilds (pasajero:Pasajero) : void{
// This will be the approach with no optional chaining, this will throw an error beacuse the we can not read the length of undefined in the case the pasajero argument does not contain childs

    // const howManyChilds = pasajero.childs.length
    // console.log(howManyChilds)

    //  For this case we can implement on the optional parameter of the interface a question Mark, like this  

    // In case that childs does not existes we would get 0 
    const howManyChilds = pasajero.childs?.length || 0;
    console.log(howManyChilds)
}
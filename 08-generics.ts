//  Genericos

//  When we specify a generic datatype it means that it can change the value of the primitive provided as an argument and mutate depending on what is passed without specificly define the type of return 
 function whatAmI<generico>(argument: generico){
     return argument
 }


 let soyString = whatAmI('Hola')
 let soynumber = whatAmI(100)
 let soyArray = whatAmI([1,false,'hola'])
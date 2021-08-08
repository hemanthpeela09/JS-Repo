//Advance types

//Intersection types
//Type Guards
//Discriminated Unions
//Type Casting
//Function overload

type Admin = {
    name: string,
    priviliges: string[]
}

type Access = {
    name: string,
    date: Date
}

type SystemAccess = Admin | Access; // Admin | Access;

function getSystem(system: SystemAccess){
    console.log(system.name);

    if('priviliges' in system){
        console.log(system.priviliges);
    }
}

//Type casting
//const userInput = <HTMLInputElement> document.getElementById("user-input")!;
const userInput = document.getElementById("user-input")! as HTMLInputElement; // Alternate syntax
userInput.value = "Hi There";

//Null coalescing || or ??
//const username = '';
//const storeData = username || 'DEFAULT';
const username = undefined;
const storeData = username ?? 'DEFAULT';

console.log(storeData);
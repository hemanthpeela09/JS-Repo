//Generics

//Generic functions and classes
//constriants
//Special typescript types

function merge<T, U>(ObjA: T, ObjB: U){
    return Object.assign(ObjA, ObjB);
}

const mergeObj = merge({name: 'Hemanth'}, {age: 29});
console.log(mergeObj);

//Decorators
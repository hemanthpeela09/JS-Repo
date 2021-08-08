//Union Type number | String 
//Literal Type 'as-number' | 'as-text' used with Union types
function combine(input1: number | String, input2: number | String, resultConv: 'as-number'|'as-text'){
    let result;
    if(typeof input1 === "number" && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString() + resultConv;
    }
    return result;
}

console.log(combine(1, 20, 'as-number'));
console.log(combine('hemanth', 'peela', 'as-text'));

//Custom Type
type combinable = number | String;
function combineAble(input1: combinable, input2: combinable){
    let result;
    if(typeof input1 === "number" && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

console.log(combineAble(4,50));
console.log(combineAble('Hemanth', 'Peela'));

//Custom Type with aliases
type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

const user: User = {name: 'Hemanth', age: 29};
console.log(greet(user));
console.log(isOlder(user, 28));
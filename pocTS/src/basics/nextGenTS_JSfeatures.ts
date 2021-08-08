const value = "heamtn";
console.log(value);
//Const is constant can be re-initiatlized
//Let and Const are scoped values which will be available within block of code but not outside
//Var in functions it will be scoped value but in IF condition it will be global variable

function add(n: number, n2: number){
    var result = n+n2;
    return result;
}

//console.log(result); - this be errored due to it in function it will be scoped variable
const age = 30;
if(age>20){
    var result = "Passed";
    let result1 = "Passed";
}

//console.log(result); - though TS will show error but Vanila JS will be work 
//console.log(result1); - throws error

//Arrow operator

const value1 = (a:number, b:number ) => a+b;
console.log(value1(2,5));

//Spread Opertaor

const places = ['india','usa'];
const visited = ['paris', ...places];

//console.log(visited);
//console.log(...places);

const myPlace = [];
myPlace.push(visited);

//console.log(myPlace);
//console.log(...myPlace);

//Rest Parameters - accepts N number of elements

const sum = (...numbers: number[]) => {
    let result = 0;
    let values = [];
    values.push(...numbers);
    for(let i=0;values.length>i;i++){
        result = result + values[i];
    }
    return result;
}
console.log(sum(10,20,30,40));

//Arrays Destructuring
const hobbies = ['swim','play','music','code','ps'];
const [hobbie1, hobbie2, ...remainingHobbies]= hobbies; // Destructing Array
console.log(hobbies);
console.log(hobbie1);
console.log(hobbie2);
console.log(remainingHobbies);

//Object Destructuring
const person = {
    pName: 'hemanth',
    pAge: 29,
    pPlace: 'hyd'
}
const { pName, pAge } = person;
console.log(pName, pAge);

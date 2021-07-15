//Function and Callback
function add(n1: number, n2:number){
    return n1+n2;
}

function printResult(result: number){
    console.log("Result: "+ result);
}

function addAndPrint(n1: number, n2: number, callFunc: (result: number) => void){
    let result = n1+ n2;
    callFunc(result);
}

let callFunc = printResult;
addAndPrint(10, 20, callFunc);


// Unkown type gives advantage over any so we can restrict user to assign that particular value
let userInput: unknown;
let userName: string;
let userNum: number;

userName = "Hemanth";
userNum = 10;

if(typeof userNum === 'number'){
    userInput = userNum;
    console.log(userInput);
}

if(typeof userName === 'string'){
    userInput = userName;
    console.log(userInput);
}

//Never return type
function throwError(message: string, code: number): never{
    throw {message: message, errorCode: code};
}

throwError('Never function called', 500); // Never returns a return type 
console.log(userInput); //Throw function stops the flow of code
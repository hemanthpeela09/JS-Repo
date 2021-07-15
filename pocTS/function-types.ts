//Function Return type it will take default Number
function add(n1: number, n2: number){
    return n1+n2;
}

//Function Return type it will take default String
function sub(n1: number, n2: number){
    return n1.toString() +n2.toString();
}

//Function Return type it will either number or string
function mul(n1, n2): number | String {
    return n1 +n2;
}

//Function Return type void does not return anything
function printResult(result){
    console.log("Result: " + result);
}

printResult(add(10,20));
printResult(sub(20,10));

// Copy function to a variable
let combineFunc : Function;
combineFunc = add;
console.log(combineFunc(50,20));

combineFunc = printResult;
console.log(combineFunc('Hemant'));


//Accept only number function
let acceptNum: (n1: number, n2: number) => number;
acceptNum = add;
// acceptNum = sub; throws errors here for sub due to return type of sub is string
// acceptNum is only allowed for numbers
console.log(acceptNum(20,60));

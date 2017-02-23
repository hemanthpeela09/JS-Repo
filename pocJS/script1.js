var greet = "Hello";
var greet = "Hola";

console.log(greet);

var english = {};
var spanish = {};

english.greet = "Hello";
spanish.greet = "Hola";

console.log(english);

function cheer(){
    console.log("Hi there!!");
}

cheer.language = "english";
console.log(cheer); //In JS function is also an Object

console.log(cheer.language); //Function Property

cheer(); //Function Invocation

var jsValue = {
    firstName: "Hemanth",
    isAProgrammer: true
};

//Object Literal Notation
console.log(jsValue);

//JS value to JSON value
console.log(JSON.stringify(jsValue));

var jsonValue = JSON.parse('{ "firstName": "Hemanth", "age": 25, "isAProgrammer": true }');

//JSON value to JS value 
console.log((jsonValue));


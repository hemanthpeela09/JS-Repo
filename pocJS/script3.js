//By value (primitives)
var a = 3;
var b;

b = a;
a = 5;

console.log(a);
console.log(b);

// a & b both have copies of each in memory & no dependency btwn them

// By Reference (all Objects (including functions)) use of Object
var c = {greeting : "hi"};
var d;

d = c;
c.greeting = "hello";//Mutable object (Changeable object)

console.log(c);
console.log(d);

//By reference (even as parameters)
function changeGreeting(obj){
    obj.greeting = "Hola";
}

changeGreeting(d);
console.log(c);
console.log(d);

//Equals operator sets up new memory space(new address)
c = {greeting: "Howdy"}; // Equal operator checks preexisting in memory so it will new spot of memory. 
console.log(c);
console.log(d);
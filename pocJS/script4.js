//Objects, Functions & This

console.log(this);//This Refers to Global object context - window

function a(){
    console.log(this);//Execution context even here this refer to WIndow
    this.newVariable = "Attaching local variable to global using this";
}
a();

console.log(newVariable);//Can be called here bcz we have attached it to global variable in function

var b = {  //Creating an object literal
    name: "In B Object",
    status: false,
    anyFunc: function(){
        console.log(this);
        //Here this refer to Object Itself 
        //(it will be pointing to b variable objects itself not global Context)
        this.name = "Updating B Object";
        this.status = true;
        console.log(this);
        
        var againFunc = function(newName){  
            this.name = newName; //Here 'this' function is pointing to global object 
            //bcz in new Execution context it refer to global if it is with in other function
            console.log(this);
        }
        againFunc("Updating B object again!");
    }
}
b.anyFunc();

//To over come with in function scenario we need to declare 'this' to an object to make it local context
var c = {
    name : "IN C object",
    anyFunc: function(){
        var self = this; //Used self to use this opr. wit in function to  over come global context issue
        console.log(self);
        self.name = "Updating C Object";
        console.log(self);
        
        var againFunc = function(newName){  
            self.name = newName;
            console.log(self);
        }
        againFunc("Updating C object again!");
    }
}
c.anyFunc();

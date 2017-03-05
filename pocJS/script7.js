//Understanding Closures
function greet(whattosay){
    return function(name){
        console.log(whattosay + ' '+ name);
    }
}

greet('Hi')('Hemanth!');

//Similarly 

var temp = greet('Hi');
console.log(temp);
temp('There!!');


function building(){
    var arr= [];
    
    for(var i =0; i<3; i++){
        arr.push(
            function(){
                console.log(i);
            } 
        );
    }
    return arr;
}

var temp1 = building();
console.log(temp1);

temp1[0]();
temp1[1]();
temp1[2]();
//Arguments & Spreads
function greet(fName, lName, lang, ...others){
    
    lang = lang || 'JS'; //Setting default value if argument is undefined
    
    if(arguments.length === 0){
        console.log('No arguments passed!');
        console.log('--------');
        return;
    }
    
    console.log(fName);
    console.log(lName);
    console.log(lang);
    
    console.log(arguments);//Shows arguments which are passed
    console.log('--------');
}

greet();
greet('Hemanth');
greet('Hemanth','Peela');
greet('Hemanth','Peela','Java');
greet('Hemanth','Peela','Java','Hyderabad','TS','India');// ...other argument will wrap additional values into an array which are not defined
//We can skip the argument JS will accept it 


//Like in JAVA,In JS function overloading is not possible bcz here function itself is an Object
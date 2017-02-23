var city = new Object();
    city["vtz"] = "vizag";
    city["hyd"] = "hyderabad";
    
var cityProperty = "vtz";

console.log(city);
console.log(city[cityProperty]);
console.log(city.hyd);

city.address = {};
city.address.state = "AP";
city.address.country = "India";
console.log(city);


var hemanth = {
    name:"Hemanth",
    age: 25,
    salary:"30k",
    address: {
        street: "Manikonda",
        city: "Hyd",
        state: "Telangana",
        pin: 500032
    }
};
console.log(hemanth);

function hello(person){
    console.log("Hi there :) "+person.name);
}

hello(hemanth);
hello({
   name: "Peela"
});
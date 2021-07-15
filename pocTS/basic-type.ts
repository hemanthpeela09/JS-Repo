//Types
console.log('Hello world!');

function add(n1: number, n2: number){
    console.log(typeof n1);
    return n1 + n2;
}

let num1 = 5;
const num2 = 2.324343213213;

console.log(add(num1, num2));

//Object Types
const person: {
    name: String,
    age: number
} = {
    name: "Hemanth",
    age: 30
}

console.log(person.name);


//Nested objects
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    score: [1,3,5],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    },
    role: [1, "Admin"] //Tuple
  }

  let Activities;
  Activities = ['String', 1];

  //ENUM - Custom type
  enum Role{ ADMIN, READONLY, DEV };
  const roles = {
      pname: 'Hemanth Developer',
      prole: Role.ADMIN
  }

  if(roles.prole == Role.ADMIN){
      console.log(roles.pname);
  }

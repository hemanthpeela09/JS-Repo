//COllection Of Arrays

var arr = [
    1,
    true,
    {
        name: "Hemanth",
        address: "Hyd",
    },
    function(movie){
        var temp = "Oscar winner is: ";
        console.log(temp + movie);
    },
    "Hello",
    1.54
];
console.log(arr);

console.log(arr[2]);

arr[3]("La La Land");

arr[3](arr[2].address);
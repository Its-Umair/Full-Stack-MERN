// 1 ways to print in javascript
//alert("me")
//document.write("this is a test")

// 2 javascript console api
//console.log("Hello World");
//console.warn("This is a test")
//console.error("This is a error")

// 3 javascript variable
// containers to store data values
var number1 = 34;
var number2 = 59;
// console.log(number1 + number2);

// 4 data types in java script
var num1 = "55";
var str1 = "this is a string";
// console.log(num1 + str1);
// objects

var marks = {
    hassan: 45,
    ali: 50,
    umair: 79
}
// console.log(marks);

// Boolean
var a1 = true;
var b2 = false;
// console.log(b);

// vr und;
var und;
// console.log(und);

var n = null;
// console.log(n);

/*
At a very high level, there are two types of data types in Javascript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference Data types: array, object
*/

var arr = [1,2,3,4,5,6,7]
// console.log(arr)

// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a+b is ", a+b);
// console.log("The value of a-b is ", a-b);
// console.log("The value of a*b is ", a*b);
// console.log("The value of a/b is ", a/b);

// Assignment Operators
var c = b;
// c +=2;
// c -=2;
// c *=2;
// c /=2;
// console.log(c);

// comparison operator
// var x= 34;
// var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);

// Logical operator
// And operator
// console.log(true && true)
// console.log(false && true)
// console.log(false && false)

// Or || operator
// console.log(true || true)
// console.log(false || true)
// console.log(false || false)

// Not operator
// console.log(!false);
// console.log(!true);

// Function in JavaScript
function avg(a, b){
    c = (a + b)/2;
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(6, 6);
// console.log(c1)

// Conditionals in JavaScript

var age = 41;
// Single if statement
// if (age > 18){
//     console.log('You are not a kid');
// }

// if - else statement

// if (age > 18){
//     console.log('You are not a kid');
// }
// else{
//     console.log('You are a kid');
// }

/*
age = 18;

// if-else Ladder
if (age > 32){
    console.log("You are not a kid");
}
else if (age > 56){
    console.log("You are a senior citizen");
}
else if (age > 26){

    console.log("You are a young man");
}
else{
    console.log("You are a kid");
}
console.log("End of ladder");
*/

var arr = [1,2,3,4,5,6,7]
// console.log(arr);
// for(var i = 0; i < arr.length;i++){
//     console.log(arr[i]);
// }

arr.forEach(function(element){
    console.log(element);
})

Let j = 0;
const ac = 0;
ac++;
ac = ac + 1;
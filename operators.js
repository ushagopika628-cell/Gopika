//Arithmatic
console.log("Arithmetic operators");
var a = 20;
var b = 10;
console.log(a+b)//addition

var a = 20;
var b = 10;
console.log(a-b)//Subtraction

var a = 20;
var b = 10;
console.log(a*b)//Multiplication

var a = 20;
var b = 10;
console.log(a/b)//Division

var a = 20;
var b = 10;
console.log(a%b)//Modules

var a = 20;
var b = 10;
console.log(a**b)//Expotation 

//Assignment 
console.log("Assignmen operators");
var c = 30;
console.log(c+=10)
console.log(c-=10)
console.log(c*=10)
console.log(c/=10)
console.log(c%=10)

//comparision
console.log("Comparision operators");
console.log(a==b);
console.log(a!=b);
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);

//logical 
console.log("Logical operators");
console.log(a>0 && b>0);
console.log(a>0 && b<0);
console.log(a<0 || b<0);
console.log(a>0 || b<0);
console.log(!(a>0));

//unary
console.log("Unary operators");
var c = 30;
console.log(c++); //30 c - 31
console.log(c--); //31 c - 30
console.log(--c); //29 c - 29
console.log(c++); //30 c - 30

//Ternary
console.log("Ternary operators");
var result = (a > b) ? "a is greater": "b is greater";
// var variableName = (condition) ? truevalue: falsevalue;
console.log(result); // o/p - b is greater
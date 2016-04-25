"use strict"

var request = require('request');
//import request from "request";

let message = 'welcome to es6 practice'

try{
  console.log(message);
} catch (err) {
  console.log(err);
}

// //let wataru; //hoisted

// var i=0;
// for ( let i=i ; i < 10 ; i++ ) {
//   console.log(i);
// }

//for (var i = 0; i < 10; i++) { process.nextTick(_ => console.log(i)) } //prints 10, 10 times
//for (let i = 0; i < 10; i++) { process.nextTick(_ => console.log(i)) } //prints 0-9

//let creates lexical scope, let rebinds in each for loop iteration, let is not hoisted but can be defined its reference (will return ReferenceError), u cant have 2 let variables with the same name


//Arrow functions benefits
//1. more concise fucntions
//2. lexical binding of this context
console.log("arrow functions!");
var a = () => {
  console.log(1);
};
a();
//=> 1

let b = () => {
  console.log(2);
};
b();

var c = () => console.log(3);
c();
//=> 3

let d = () => console.log(4);
d();

var a = () => {
  return 1;
};
console.log(a());
//=> 1

var a = () => console.log(1);
a();


/////////////////////////////////////////
let arr = ['A','b','C','d','E','f'];
console.log(arr.map(v => v.toUpperCase()));
//A B C D E F 
console.log(arr.map(v => v.toLowerCase()));
//a b c d e f

var sum = (arr) => arr.reduce((a,b) => a+b);
	console.log(sum([1,2,3,4,5,6,7]));
//28

var roundAndSum = (arr) => arr.reduce((a,b)=>
	a+Math.round(b));
console.log(roundAndSum([1.5,2.4,3.7,2.2]));

var fibo = (n) => {
  if (n < 2) return n;
  return fibo(n - 2) + fibo(n - 1);
};

console.log(fibo(10));
//=> 55

let arrr = [1, 2, 3];
arrr.forEach(v => console.log(v, this));

//IIFE
(() => console.log(1))();
//=> 1
((a, b) => console.log(a, b))(1, 'hoge');
//=> 1 'hoge'

//template literal

var str1 = 'スーパー';
var str2 = '合体';

var str = `Template literalで文字列の${str1}の${str2}!`;

console.log(str); //Template literalで文字列のスーパーの合体

var str = `${5*5}は${5+5+5+5+5}!`;
console.log(str);

//this
function speak(){
	console.log(this.name.toUpperCase());
}

var me = {
	name:'wataru'
}

speak.call(me);


//lexical this using arrow functions
let polyglot = {
    name : "Michel Thomas",
    languages : ["Spanish", "French", "Italian", "German", "Polish"],
    introduce : function () {
        this.languages.forEach((language) => {
            console.log("My name is " + this.name + ", and I speak " + language + ".");
        });
    }
}

let languages = ["Spanish", "French", "Italian", "German", "Polish"];

// In a multiline arrow function, you must use curly braces, 
//  and you must include an explicit return statement.
let languages_lower = languages.map((language) => {
    console.log(language.toLowerCase());
});

// In a single-line arrow function, curly braces are optional,
//   and the function implicitly returns the value of the last expression.
//   You can include a return statement if you'd like, but it's optional.
let languages_lower2 = languages.map((language) => console.log(language.toLowerCase()));

// If your arrow function only takes one argument, you don't need to wrap it in
//   parentheses. 
let languages_lower3 = languages.map(language => console.log(language.toLowerCase()));

// Finally, if your function takes no arguments, you must include empty parentheses before the arrow.
(() => console.log("Hello!"))();

//((a,b) => console.log(a+b))();

let arr2 = [1,2,3,4,5,6,7,8,9,10];
let processed = arr2.reduce((a,b) => a*b);
//console.log(processed);


let input = [10];
let factorial = input.reduce((a,b) => {
	if (input<1){
		console.log("here");
		console.log(a);
	} else {
		console.log("here");
		factorial(b-1);
	}
  console.log("here");	
});

let fact = (a,b) => {
	if(a>b) {
		console.log(a);
	} else {
		fact(a,b-1);
	}
};

fact(2,3);

function factorial2(n) {
  if (n === 0) {
    return 1;
  }
  console.log(n);
  return n * factorial2(n - 1);
}
console.log(factorial2(10));

var bleh = [1, 2, 3, 4, 5].reduce(function (x, y) { return x + y }, 100);  // 115
console.log(bleh);
//reduce 1st param = starting point, y = each element in arr, z = index
var bleh2 = [14, 3, 77].reduce(function(x, y, z) { return x + y * z } ,0);   // 0*14 + 1*3 + 2*77
console.log(bleh2);

function factorialXD(n) {
  return Array.apply(0, Array(n)).reduce(function(x, y, z) { return x + x * z; }, 1);
}

//Array.appy(0,Array(10)) creates an array with 10 elements (all udnefined)
//[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]

//reduce
//x=1 z = 0
//x*z
//1*0 = 0, x = 0
//1*1 = 1, x = 1 //z goes up 1, x = 1
//1*2 = 2, x = 2 //z goes up 1, x = 2
//2*3 = 3, x = 6 //z goes up 1, x = 6
//6*4 = 24, x = 24 // done, return x (24)

console.log("factorial of 4 is: "+factorialXD(4)); //1*2*3*4

//var wtfarray = Array.apply(0,Array(10));
//console.log(wtfarray.length);
//console.log(wtfarray);

var q = (a,b)=>console.log(a+b);
q(1,2);

var x = (n) => console.log(n);
x(1);

(()=>console.log("hi"))();

//must use --harmony_destructuring

let [z,p,m,v] = [1,2,3,4];

console.log(z);
console.log(p);

let luke = { occupation: 'jedi', father: 'anakin' };
let {occupation, father} = luke;

console.log(occupation); // 'jedi'
console.log(father); // 'anakin'

//promises

const url = 'http://jsonplaceholder.typicode.com/posts/1';

var p1 = new Promise((resolve, reject) => {
  request.get(url, (error, response, body) => {
    if (body) {
    	console.log("got a response");
        resolve(JSON.parse(body));
      } else {
        reject(JSON.parse(body));
      }
  });
});

p1.then((response)=>console.log(response));
p1.catch((err)=>console.log(err));


const url2 = 'http://jsonplaceholder.typicode.com/posts/2';

var p2 = new Promise((resolve, reject) => {
  request.get(url2,(error,response,body)=>{
    if(body){
      console.log("we got a response");
      resolve(JSON.parse(body));
    } else {
   	  console.log("something went wrong");
   	  resolve(eror);
    }
  });
});

p2.then((msg)=>console.log(msg));
p2.catch((err)=>console.log(err));
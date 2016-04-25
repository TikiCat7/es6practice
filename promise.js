'use strict'

/*
var request = require('request');

const url = 'http://jsonplaceholder.typicode.com/posts/2';

const p1 = new Promise((resolve, reject) => {
	request.get(url,(error,response,body)=>{
		if(body){
			console.log("async operation done");
			resolve(JSON.parse(body));
		} else {
			resolve(error);
		}
	});
});

p1.then((msg)=>console.log(msg));
p1.catch((err)=>console.log(err));
*/

/*

fetchData().then(function(data) {
  return prepareDataForCsv(data);
}).then(function(data) {
  return writeToCsv(data);
}).then(function() {
  console.log('your csv has been saved');
});

*/

//async operation for 3s, then do something

function step1(){
	return new Promise((resolve, reject) => {
		console.log('starting async operation...');
		setTimeout(()=>{
		  console.log('we are done with step1');
		  resolve('we are done with step2');
		},3000);
	});
}

function step2(msg){
	return new Promise((resolve, reject) => {
		console.log('starting async opeartion #2...');
		setTimeout(()=>{
			console.log(msg);
			resolve('we are done with step3');
		}, 3000);
	});
}

function step3(msg){
	return new Promise((resolve, reject) => {
		console.log('starting async operation #3...');
		setTimeout(()=>{
			console.log(msg);
			resolve()
		}, 3000)
	});
}


//step1().then((msg)=>{console.log(msg);}).catch((err)=>{console.log(err)}); //succinct way of writing 1 promise
//step1().then((response)=>{step2(response)}).catch((err)=>{console.log(err)}); //chaining promises

step1()
  .then(response=> step2(response))
  .then(response=> step3(response))
  .then(()=>console.log('all done'))
  .catch(err=> console.log(err));


  

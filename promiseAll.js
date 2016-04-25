'use strict'

const p1 = new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve('Dog');
	}, 3000)
});

const p2 = new Promise((resolve, reject) => {
	var RNG = Math.random();
	RNG > 0.5 ? resolve(RNG) : reject(RNG);
});

const p3 = 'Robot';

/*
Promise.all([p1,p2,p3]).then(()=>{
	console.log('all done');
}).catch((msg)=> console.log(msg));
*/

Promise.all([p1,p2,p3]).then(
	function fulfilled(msg){
		console.log('fulfilled');
		console.log(msg);
	},
	function rejected(msg){
		console.log('rejected');
		console.log(msg);
	});



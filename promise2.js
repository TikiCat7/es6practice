'use strict'

function step1(){
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			console.log('step1 done');
			resolve();
		}, 1000)
	});
}

function step2(){
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			console.log('step2 done');
			var RNG = Math.random();
			RNG > 0.5 ? resolve(RNG) : reject(RNG)
		}, 1000)
	});
}

//2 chain promise with random number determining whether it resolves or rejects
step1().then(()=> step2()).then((RNG)=> console.log('yay: '+RNG)).catch((RNG)=> console.log('rip: '+RNG));
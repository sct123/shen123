var state = 0;
var d = [0,1,2,3,4,5,6,7,8];
var x = document.getElementsByClassName("box");


function getRandomColor() {
	let a = (Math.floor(Math.random()*205)+50).toString(16);
	let b = (Math.floor(Math.random()*205)+50).toString(16);
	let c = (Math.floor(Math.random()*205)+50).toString(16);
		// console.log(a+","+b+","+c);
    	return '#'+a+b+c;
	}


function funOn() {
	

	let i;
	
	for (i = 0; i <9 ; i++) {
		let r = Math.floor(Math.random()*10);
		let s = d[r];
		d[r] = d[i];
		d[i] = s;

		}
	funOff();
	changesColor();
	

}
function changesColor() {
	// body...
	for (let j = 0; j <3; j++) {

		try{
			x[d[j]].style.background = getRandomColor();
		}catch(err){

		}
		
	}
}

function funOff() {
	// body...
	for (let i = 0; i <9; i++) {
		x[i].style.background = '#ffa600';
	}
}

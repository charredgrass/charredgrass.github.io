//Techie Clicker 0.1 by Maxwell Chow
// JS Script

var air = 0;
var power = 0;
var wood = 0;
var nails = 0;
var flats = 0;
var isCompOn = false;

var woodInc = 1;
var powInc = 4;
var nailInc = 1;
var maxPow = 100;
var maxAir = 100;

function everySecond(){
	//Compressor Code
	if (isCompOn) {//If compressor is on...
		if (power <= 0) {//...and out of power...
			isCompOn = false;//...turn compressor off.
			document.getElementById('toggleCompressor').innerHTML = "Turn Compressor On"
		} else {//...and still has power...
			power -= 1;//...subtract power...
			air += 1;//...and gain air.
		}
	}
	updateDisplay();
}

function afford(pAir, pPower, pWood, pNails){//Returns true if you can afford the stuffs.
	if (air >= pAir && power >= pPower && wood >= pWood && nails >= pNails){
		return true;
	} else {
		return false;
	}	
}

function purchase(pAir, pPower, pWood, pNails){//Subtracts values from inventory. Call when making a purchase.
	air -= pAir;
	power -= pPower;
	wood -= pWood;
	nails -= pNails;
	updateDisplay();
}

function clickWood(){
	wood += woodInc;
	updateDisplay();
}

function clickNail(){
	nails += nailInc;
	updateDisplay();
}

function clickPower(){
	power += powInc;
	if (power > maxPow) {
		power = maxPow;
	}
	updateDisplay();
}

function clickCompressor(){
	isCompOn = !isCompOn;
	if (isCompOn) {
		document.getElementById('toggleCompressor').innerHTML = "Turn Compressor Off"
	} else {
		document.getElementById('toggleCompressor').innerHTML = "Turn Compressor On"
	}
}

function buildFlat(){
	if (afford(8,0,4,8)){
		purchase(8,0,4,8);
		flats += 1;
	}
	updateDisplay();
}

function updateDisplay() {
	document.getElementById('woodAmt').innerHTML = "1 by 3: " + wood;
	document.getElementById('nailAmt').innerHTML = "Nails: " + nails;
	document.getElementById('flatAmt').innerHTML = "Flats: " + flats;
	document.getElementById('powerPerc').innerHTML = "Power: " + Math.floor(power / maxPow * 100) + "%";
	document.getElementById('airPerc').innerHTML = "Air: " + Math.floor(air / maxAir * 100) + "%";
}

function save(){ //Stores inventory variables into localStorage.
	console.log('Saving game');
	localStorage.setItem("woodLS", wood);
	localStorage.setItem("nailsLS", nails);
	localStorage.setItem("powerLS", power);
	localStorage.setItem("airLS", air);
	localStorage.setItem("flatsLS", flats);
	localStorage.setItem("woodIncLS", woodInc);
	localStorage.setItem("powIncLS", powInc);
	localStorage.setItem("nailIncLS", nailInc);
	localStorage.setItem("maxAirLS", maxAir);
	localStorage.setItem("maxPowLS", maxPow);

}

function load(){ //Loads inventory variables from localStorage.
	console.log('Attempting to load game...');
	wood = parseInt(localStorage.getItem("woodLS"));
	nails = parseInt(localStorage.getItem("nailsLS"));
	power = parseInt(localStorage.getItem("powerLS"));
	air = parseInt(localStorage.getItem("airLS"));
	woodInc = parseInt(localStorage.getItem("woodIncLS"));
	powInc = parseInt(localStorage.getItem("powIncLS"));
	nailInc = parseInt(localStorage.getItem("nailIncLS"));
	maxAir = parseInt(localStorage.getItem("maxAirLS"));
	maxPow = parseInt(localStorage.getItem("maxPowLS"));
	flats = parseInt(localStorage.getItem("flatsLS"));
	updateDisplay();
}

window.setInterval(everySecond,1000);
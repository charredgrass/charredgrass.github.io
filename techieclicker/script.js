//Techie Clicker 0.1 by Maxwell Chow
// JS Script

var air = 0;
var power = 0;
var wood = 0;
var nails = 0;
var flats = 0;
var money = 0;
var isCompOn = false;

var techieStats = [{name: "Henry", id: 1, woodPS: 1, nailPS: 1, powPS: 1, quant: 0},{name: "Philipp", id: 2, woodPS: 5, nailPS: 0, powPS: 0, quant: 0}];

var woodInc = 1;
var powInc = 4;
var nailInc = 1;
var maxPow = 100;
var maxAir = 100;

var time = 0;
var timeSinceLastLog;

var isNightMode = false;

var log = "";

var version = "0.3"

window.onload = function() {//Stuff that happens on game load. Start logs, display version.
	addToLog("Game has loaded.");
	document.getElementById('version').innerHTML = "version " + version;
	document.getElementById('log').innerHTML = log;
};

function everySecond(){//Stuff that is executed each second.
	//Compressor Code
	if (isCompOn) {//If compressor is on...
		if (power <= 0) {//...and out of power...
			isCompOn = false;//...turn compressor off.
			document.getElementById('toggleCompressor').innerHTML = "Turn Compressor On"
			document.getElementById('comp').innerHTML = "<img src=\"images/compressorOff.png\" onClick=\"clickCompressor()\" class=\"imgIcon imgAir\"></img>"
			addToLog("The compressor ran out of power.");
		} else {//...and still has power...
			power -= 1;//...subtract power...
			air += 1;//...and gain air.
		}
	}

	var count = 0; //Add stuff from Automations.
	while (count < techieStats.length){
		addStuff(count);
		count += 1;
	}

	if (getLogLength() > 5){
		cutLog();
	}
	time += 1;
	updateDisplay();//Update display.
}

function updateDisplay() {
	document.getElementById('woodAmt').innerHTML = "1 by 3: " + wood;
	document.getElementById('nailAmt').innerHTML = "Nails: " + nails;
	document.getElementById('flatAmt').innerHTML = "Flats: " + flats;
	document.getElementById('powerPerc').innerHTML = "Power: " + Math.floor(power / maxPow * 100) + "%";
	document.getElementById('airPerc').innerHTML = "Air: " + Math.floor(air / maxAir * 100) + "%";
	//document.getElementById('inBarPower').style.width = Math.floor(power / maxPow * 100);

	//Update Display
	document.getElementById('log').innerHTML = log;
}

function addStuff(id){//Increment based on Automations.
	wood += techieStats[id].woodPS * techieStats[id].quant;
	nail += techieStats[id].nailPS * techieStats[id].quant;
	power += techieStats[id].powPS * techieStats[id].quant;
	if (power > 100){
		power = 100;
	}

}

function afford(pAir, pPower, pWood, pNails){//Returns true if you can afford the stuffs.
	if (air >= pAir && power >= pPower && wood >= pWood && nails >= pNails){
		return true;
	} else {
		addToLog("Can't afford!");
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

function buildFlat(){//Build one flat.
	if (afford(8,0,4,8)){
		purchase(8,0,4,8);
		flats += 1;
	}
	updateDisplay();
}

function sellFlat(){
	if (flats >= 1) {
		flats -=1
		money += 5;
	} else {
		addToLog("No flats to sell!");
	}
}


function clickWood(){//Executed when one of the clickbuttons are pressed.
	wood += woodInc;
	updateDisplay();
}

function clickNail(){//Executed when one of the clickbuttons are pressed.
	nails += nailInc;
	updateDisplay();
}

function clickPower(){//Executed when one of the clickbuttons are pressed.
	power += powInc;
	if (power > maxPow) {
		power = maxPow;
	}
	updateDisplay();
}

function clickCompressor(){//Activate/deactivate compressor.
	isCompOn = !isCompOn;
	if (isCompOn) {
		document.getElementById('toggleCompressor').innerHTML = "Turn Compressor Off"
		document.getElementById('comp').innerHTML = "<img src=\"images/compressorOn.png\" onClick=\"clickCompressor()\" class=\"imgIcon imgAir\"></img>"
	} else {
		document.getElementById('toggleCompressor').innerHTML = "Turn Compressor On"
		document.getElementById('comp').innerHTML = "<img src=\"images/compressorOff.png\" onClick=\"clickCompressor()\" class=\"imgIcon imgAir\"></img>"
	}
}

function toggleNightMode(){
	isNightMode = !isNightMode;
	if (isNightMode) {
		document.body.style.backgroundColor = "#ADADAD";
	} else {
		document.body.style.backgroundColor = "#ECECEC";
	}
}

function cutLog(){
	//Cuts log
	if (log != ""){
		log = log.slice(5, log.length).slice(log.indexOf("</br>"), log.length);
	}
	updateDisplay();
}

function getLogLength(){
	var count = log.match(/<\/br>/g).length;
	return count;
}

function addToLog(message) {
	log = log + message + "</br>"
	timeSinceLastLog = 0;
	if (getLogLength() > 5){
		cutLog();
	}
}

function buy(what){
	if (what == "nothing" && afford(0,0,0,0)) {
		wood += 0;
	}
	addToLog("Purchase successful!");
}

//**************************************
//**************************************
//**********SAVE/LOAD FUNCTIONS*********
//**************************************
//**************************************


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
	localStorage.setItem("moneyLS", money);

	localStorage.setItem("HenryLS",techieStats[0].quant);
	localStorage.setItem("PhilippLS",techieStats[1].quant);
	addToLog("Game saved.");
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
	money = parseInt(localStorage.getItem("moneyLS"));

	techieStats[0].quant = parseInt(localStorage.getItem("HenryLS"));
	techieStats[1].quant = parseInt(localStorage.getItem("PhilippLS"));

	updateDisplay();
	addToLog("Game loaded from save file.");
}

window.setInterval(everySecond,1000);
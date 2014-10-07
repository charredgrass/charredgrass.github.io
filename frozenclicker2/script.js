//Frozen Clicker 2.0 by /u/charredgrass

//inventory
var olaf = 0;
var sven = 0;
var kristoff = 0;
var anna = 0;
var elsa = 0;
var carrots = 0;
var ice = 0;
var chocolate = 0;

var debugMode = false;

var togglePrice = false;
var pricetable = '<h3>Costs</h3><table><tr><td>Clicker</td><td>Ice</td><td>Carrots</td><td>Chocolate</td></tr><td>Olaf</td><td>100</td><td>1</td><td>0</td></tr><tr><td>Sven</td><td>100</td><td>100</td><td>0</td></tr><tr><td>Kristoff</td><td>1000</td><td>1000</td><td>0</td></tr><tr><td>Anna</td><td>1000</td><td>1000</td><td>1</td></tr><tr><td>Elsa</td><td>10000</td><td>0</td><td>100</td></tr><tr><td>1 Chocolate</td><td>1000</td><td>1000</td><td>0</td>';

//options
//Yeah, I have no options yet.


var version = "2.0";
window.onload = function() {
	document.getElementById('version').innerHTML = "version " + version;
};

function resetGame(){ //Resets all inventory variables back to 0.
	sven = 0;
	kristoff = 0;
	anna = 0;
	elsa = 0;
	carrot = 0;
	ice = 0;
	chocolate = 0;
}

function save(){ //Stores inventory variables into localStorage.
	console.log('Saving game');
	localStorage.setItem("iceLS", ice);
	localStorage.setItem("carrotsLS", carrots);
	localStorage.setItem("olafLS", olaf);
	localStorage.setItem("svenLS", sven);
	localStorage.setItem("kristoffLS", kristoff);
	localStorage.setItem("annaLS", anna);
	localStorage.setItem("elsaLS", elsa);
	localStorage.setItem("chocolateLS",chocolate);
}

function load(){ //Loads inventory variables from localStorage.
	console.log('Attempting to load game...');
	ice = parseInt(localStorage.getItem("iceLS"));
	carrots = parseInt(localStorage.getItem("carrotsLS"));
	olaf = parseInt(localStorage.getItem("olafLS"));
	sven = parseInt(localStorage.getItem("svenLS"));
	kristoff = parseInt(localStorage.getItem("kristoffLS"));
	anna = parseInt(localStorage.getItem("annaLS"));
	elsa = parseInt(localStorage.getItem("elsaLS"));
	chocolate = parseInt(localStorage.getItem("chocolateLS"));
	updateDisplay();
}

function everySecond(){//Things executed each second.
	if (debugMode) {
		console.log('A second has passed.');
	}
	ice += olaf;
	ice += 2 * sven;
	ice += 5 * kristoff;
	carrots += 4 * kristoff;
	chocolate += anna;
	chocolate += 5 * elsa;
	ice += 1000 * elsa;
	updateDisplay();
}

function updateDisplay(){//Updates HTML ctrs to match actual variable values.
	document.getElementById('ice').innerHTML = "Ice: " + Math.floor(ice);
	document.getElementById('carrots').innerHTML = "Carrots: " + carrots;
	document.getElementById('chocolate').innerHTML = "Chocolate: " + chocolate;
	document.getElementById('olafamt').innerHTML = "Olafs: " + olaf;
	document.getElementById('svenamt').innerHTML = "Svens: " + sven;
	document.getElementById('kristoffamt').innerHTML = "Kristoffs: " + kristoff;
	document.getElementById('annaamt').innerHTML = "Annas: " + anna;
	document.getElementById('elsaamt').innerHTML = "Elsas: " + elsa;
}

function build(what){//What happens when you click the buybuttons.
	//Dependsing on which button is clicked, "what" will vary.
	//It then checks if you can afford it. If so, it buys it and adds one.
	if (what == 'olaf' && afford(100,1,0)){
		purchase(100,1,0);
		olaf += 1;
	}
	if (what == 'sven' && afford(100,100,0)){
		purchase(100,100,0);
		sven += 1;
	}
	if (what == 'kristoff' && afford(1000,1000,0)){
		purchase(1000,1000,0);
		kristoff += 1;
	}
	if (what == 'anna' && afford(1000,1000,1)){
		purchase(1000,1000,1);
		anna += 1;
	}
	if (what == 'elsa' && afford(10000,0,100)){
		purchase(10000,0,100);
		elsa += 1;
	}
	updateDisplay();
}


function clickIce(){
	ice += 1;
	updateDisplay();
}

function clickCarrot(){
	carrots += 1;
	updateDisplay();
}

function afford(pice, pcarrots, pchocolate){//Returns true if you can afford the stuffs.
	if (ice >= pice && carrots >= pcarrots && chocolate >= pchocolate){
		return true;
	} else {
		return false;
	}	
}

function purchase(pice, pcarrots, pchocolate){//Subtracts values from inventory. Call when making a purchase.
	ice -= pice;//No, it's not "pice." It's PIce.
	carrots -= pcarrots;
	chocolate -= pchocolate;
	updateDisplay();
}

function setBGI(){
	if (elsa > 0) {
		document.body.style.backgroundImage="url('elsaBGI.png')";
	} else if (anna > 0) {
		document.body.style.backgroundImage="url('annaBGI.png')";
	} else if (kristoff > 0) {
		document.body.style.backgroundImage="url('kristoffBGI.png')";
	} else if (sven > 0) {
		document.body.style.backgroundImage="url('svenBGI.png')";
	} else {
		document.body.style.backgroundImage="url('olafBGI.png')";
	}
}

function buyChocolate(){
	if (afford(1000,1000,0)) {
		purchase(1000,1000,0);
		chocolate += 1;
	}
}

/*function setBackgroundColor(){
	score = getScore();
	document.body.style.backgroundColor="rgb(" +  (255 - Math.floor(score / 2)) + "," +  (255 - score) + ",255)"
}

function getScore() {
	MICE = 1000
	MCARROT = 1000 //the maximum number of each thinger to make score highest.
	return Math.floor((Math.min(255 * ice / MICE, 255) + Math.min(255 * carrots / MCARROT)) / 2);
}*/

function togglePrices(){
	if (!togglePrice) {
		document.getElementById('pricesbutton').innerHTML = "Hide Prices";
		document.getElementById('prices').innerHTML = pricetable;
	} else {
		document.getElementById('pricesbutton').innerHTML = "Show Prices";
		document.getElementById('prices').innerHTML = "";
	}
	togglePrice = !togglePrice;
}

window.setInterval(everySecond,1000);//Exectues everySecond once every 1000 ms (1s).


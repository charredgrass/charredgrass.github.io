var PlayerName = "";

function init(){
    if (localStorage.getItem("game") != "yes"){
        console.log('No game detected.');
        playerName = prompt("What is your name?","");
    } else {
        load();
    }
}
function save(){
	console.log('Saving game');
	localStorage.setItem("game","yes");
	localStorage.setItem("name", playerName);
	
}
function load(){
	console.log('Attempting to load game...');
	playerName = localStorage.getItem("name"); //Don't forget to write parseInt() when loading ints
}

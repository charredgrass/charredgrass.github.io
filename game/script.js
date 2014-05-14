var player1 = {health:100,mana:100};
var player2 = {health:100,mana:100};

window.onload = function() {
	var c = document.createElement("canvas");
	if (c.getContext && c.getContext("2d")) {
		//Game.init();
	} else {
		alert("Please use a Canvas enabled browser such as Firefox, Safari, Chrome or Opera.")
	}
}

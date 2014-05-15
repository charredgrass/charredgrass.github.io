var player1 = {health:100,mana:100,char:""};
var player2 = {health:100,mana:100,char:""};

Game.init = init;

function init(){
    //stuff that happens when the canvas loads
}

function pickChar(player, character){
    if (player == 1) {
        player1.char = character;
    } else {
        player2.char = character;
    }
}


function minion(health, strength) {
    this.health = 10;
    this.strength = 1;
}

window.onload = function(){
    //Yes
};

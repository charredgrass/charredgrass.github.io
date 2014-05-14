var player1 = {health:100,mana:100};
var player2 = {health:100,mana:100};

Game.init = init;

function init(){
    //stuff that happens when the canvas loads
}

function enemy(health, strength) {
    this.health = 10;
    this.strength = 1;
}

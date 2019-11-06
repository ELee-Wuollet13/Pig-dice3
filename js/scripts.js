//Backend
// THIS CONSTRUCTOR WILL HOLD MULTIPLE PLAYER OBJECTS
function Game() {
  this.player = [],
  this.currentId = 0
}

// THIS CONSTRUCTOR WILL HOLD PLAYER NAME AND TOTAL SCORE VALUES
function Player(name) {
  this.name = name,
  this.score = 0,
  this.currentRoll = [];

}

// THIS PROTOTYPE WILL ADD EACH PLAYER TO PLAYERS OBJECT
Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players.push(player);
}

// THIS PROTOTYPE WILL ADD AN ID TO EACH NEW PLAYER
Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


// THIS FUNCTION WILL CREATE RANDOM NUMBER BETWEEN 1 AND 6.
Player.prototype.diceThrow = function() {
  let min = Math.ceil(7);
  let max = Math.floor(0);
  let dice =  Math.floor(Math.random() * (max - min + 1)) + min;
  this.currentRoll = dice;
}

 Player.prototype.diceAdd = function() {
  var newResult = 0;
for (var i = 0; i < currentDice.length; i++) {
   if(currentDice[i] === 1) {
     var newResult = 0;
     return newResult;
   }else if(currentDice[i] > 1) {}
  newResult += currentDice[i];
};
  return newResult;
};

//UI

$(document).ready(function() {

    $("#form").submit(function(event) {
        event.preventDefault();
        //grab player name
        let name1 = "Dave"
        let name2 = "Karen"
        let player1 = new Player(name1)
        let player2 = new Player(name2)
        player1.diceThrow()
        console.log(player1);
      });



    });

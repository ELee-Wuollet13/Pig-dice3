//Backend
// THIS CONSTRUCTOR WILL HOLD MULTIPLE PLAYER OBJECTS
function Game() {
  this.player = [],
  this.currentId = 0
}

// THIS CONSTRUCTOR WILL HOLD PLAYER NAME AND TOTAL SCORE VALUES
function Player(name, diceRolls) {
  this.name = name,
  this.diceRolls = diceRolls,
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

  var thisRoll = [];
  for(i = 0; i < this.diceRolls; i++) {
    let min = Math.ceil(7);
    let max = Math.floor(0);
    let dice =  Math.floor(Math.random() * (max - min + 1)) + min;
    this.currentRoll.push(dice);
    thisRoll.push(dice);
  };

  return thisRoll;

};


Player.prototype.diceAdd = function() {
  var newResult = 0;
  for (var i = 0; i < this.currentRoll.length; i++) {
    if(this.currentRoll[i] === 1) {
      var newResult = 0;
      return newResult;
    }else if(this.currentRoll[i] > 1) {}
    newResult += this.currentRoll[i];
  };
  return newResult;
};

Player.prototype.playerPass= function() {
  this.score += this.diceAdd();
  this.currentRoll = [];
  if (this.score >= 100 ) {
    $('#winner').text(this.name + "  with " + this.score + " points!")
    $(".winner").show();
  }
};


//UI


$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();


    var playerType = $("input#computer").val();
    var inputedPlayer1 = $("input#player1").val();
    var human1 = $('#human1').val();
    var inputedPlayer2 = $("input#player2").val();
    var human2 = $('#human2').val();
    var diceRollsOpt = parseInt($("#multiDice").val());
    let player1 = new Player(inputedPlayer1, diceRollsOpt);
    let player2 = new Player(inputedPlayer2, diceRollsOpt);
    let computer = new Player("Steve the Robot", diceRollsOpt);
    if(playerType === "robot"){
      $('#player2buttons').hide();
      $('#player2name').text(computer.name);
    } else {
      $('#player2name').text(inputedPlayer2);
    };

    $('#player1name').text(inputedPlayer1);

    $('.user-input').hide();
    $("#showgame").show();
    $("#player1roll").click(function() {
      $('#current-roll1').text(player1.diceThrow())
      $("#current-round1").text(player1.diceAdd());
    });

    $('#player1pass').click(function() {
      player1.playerPass();
      $('#current-total1').text(player1.score);
      if(playerType === "robot") {
        robot();
      }
    })
    function robot() {
      $('#current-roll2').text(computer.diceThrow());
      $('#current-roll2').text(computer.diceThrow());
      $('#current-round2').text(computer.diceAdd());
      $('#current-total2').text(computer.score);
      computer.playerPass();

    }


    $("#player2roll").click(function() {
      $('#current-roll2').text(player2.diceThrow())

      $("#current-round2").text(player2.diceAdd());
    });

    $('#player2pass').click(function() {
      player2.playerPass();
      $('#current-total2').text(player2.score);



    });
  })
});

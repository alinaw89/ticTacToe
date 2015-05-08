/*Render a game board in the browser
Switch turns between X and O (or whichever markers you select)
Visually display which side won if a player gets three in a row or show a draw/”cat’s game” if neither wins*/


//User Story 1: User should see a tic tac toe board on the main page. HTML/CSS
//User Story 2: User should be able to click the board and place x in any space they choose. jQuery, $(classname).click(stuff in here)
//User Story 3: User should be able to alternate turns between X and O. jQuery (in click we would change the stuff in here to if turn is even or odd) //On click:
                //check which turn it is,
                 // if turn is even: x's turn;
                  //if turn is odd: o'x turn;
                  //place x in square
//User Story 4: User should be able to win if three in a row
//User Story 5: User should get draw if no winner





//create the board as an array for tic tac toe setting it to a variable

// var board = [[null, null, null],
//              [null, null, null],
//              [null, null, null]];
//board[0] = ["a", "b", "c"]
//board[0][1] == "b"
      //r  c

//jQuery started

var player = 0; //if player is 0, evaluates to X
var players = ['<img src="http://www.cats.org.uk/uploads/images/pages/photo_latest14.jpg">', '<img src="http://i480.photobucket.com/albums/rr163/NinjaShade_04/HuskyPuppy.jpg">'];
var squareArray=[];

$(document).ready(function(){
   $("#messageboard").html(players[player]);
 $(".square").click(function() {
  squareArray=[]; //every time we click, we clear the array

   if ($(this).html() === ""){ //jquery object and use jquery.html function
    $(this).html(players[player]);
    player = 1 - player;
       $("#messageboard").html(players[player]);
      $(".square").each(function(){ squareArray.push($(this).html())});
    console.log(squareArray);

    if (getWinner(squareArray)){
      if(player === 1) {
        alert("meow!")
        } else {
        alert("woof!");
        }
        alert("You win!");
     }
      }

 });





 function getWinner(square){
  var ret;
  for (var i = 0; i < players.length; i++){
    console.log("square " + square[0]);
    console.log("player " + players[i])
  if (square[0] === players[i] && square[1] === players[i] && square[2] === players[i]){
    ret = true;
     }
      else if (square[3] === players[i] && square[4] === players[i] && square[5] === players[i]){
      ret = true;
    } else if (square[6] === players[i] && square[7] === players[i] && square[8] === players[i]){
      ret = true;
    } else if (square[0] === players[i] && square[3] === players[i] && square[6] === players[i]){
      ret = true;
    } else if (square[1] === players[i] && square[4] === players[i] && square[7] === players[i]){
      ret = true;
    } else if (square[2] === players[i] && square[5] === players[i] && square[8] === players[i]){
      ret = true;
    } else if (square[0] === players[i] && square[4] === players[i] && square[8] === players[i]){
      ret = true;
    } else if (square[2] === players[i] && square[4] === players[i] && square[6] === players[i]){
      ret = true;
    }
    }

  return ret;
}
});




//cats turn, dogs turn
//meow, cat wins, etc
//tie

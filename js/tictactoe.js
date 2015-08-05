var player = 0;

var players = ['<img src="http://cache1.asset-cache.net/xt/887210-001.jpg?v=1&g=fs1%7C0%7CTSIR%7C72%7C101&s=1">', '<img src="http://media-cache-ec0.pinimg.com/236x/3e/b7/c5/3eb7c5bbbda15079ed8c1b9c9741d846.jpg">'];

var playerNames = ["Sir Meowington", "Sir Puppington"];

var count = 0;

var scores = [0, 0];

// Each element will have:
//  an empty string if the corresponding square has NOT been selected.
//  or, a cat image if a cat was selected
//  or, a dog image if a dog was selected

// Created empty board to track what squares have been clicked clicked
var board = ['', '', '', '', '', '', '', ''];
var boardIndex;
var drawCat = true;
var foundWinner = false;

// Event that fires when the html has been loaded
$(document).ready(function() {
  // Button click event that points to a function called resetGame
  // Did not use resetGame() because that would load immediately after the html loads
  $("button").click(resetGame);

  // Beginning of square click handler and game loop

  // Setting a click handler on every element that has class (.square)
  $(".square").click(function(event) {

    // The "this" represents the one element that is being clicked; see if the current elements of html is empty. If so, set that equal to an empty string
    if ($(this).html() === "") {
      // Inserts the img tag on the element that is being clicked on; selecting either the cat or dog
      $(this).html(players[player]);

      // Gives the id of the element that was clicked on. That will be a number that is used as an index in the board array
      boardIndex = event.target.id;

      if (drawCat) {
        // Set the board item to 'cat' using the id from the square clicked
        board[boardIndex] = 'cat';
        // Is the cat a winner?
        foundWinner = getWinner('cat');
        // Next time draw a dog
        drawCat = false; //drawcat is false so that next time we will draw a dog
      } else {
        // Set the board item to 'dog' using the id from the square clicked
        board[boardIndex] = 'dog';
        // Is the dog a winner?
        foundWinner = getWinner('dog');
        // Next time you'll draw a cat
        drawCat = true;
      }

      if (foundWinner) {
        // Hey, either the cat or the dog won. So, show it's name
        $("h3").html("Winner: " + playerNames[player]);
        addToScoreboard(player);
        $("#cat-score").text(scores[0]);
        $("#dog-score").text(scores[1]);
        // And show a background of paw prints indicating a winner
        $("body").css("background-image", "url('http://filme-carti.ro/wp-content/uploads/2014/05/urme-de-laba.jpg')");
        // Change banner to Meow or Woof
        setBanner(player);
        // If there is no winner and if the counter is to 8
      } else if (!foundWinner && count === 8) {
        // No winner after 9 clicks, game over
        $("h3").html("It's a tie! Game Over!");
      } else {
        // No winner and game not over so switch image for next player (dog or cat)
        $(".turn").html(players[1 - player]);
      }

      togglePlayer();
      count += 1;
    }

  }); // End of square click handler

  function togglePlayer() {
    player = 1 - player;
  }


  function getWinner(catOrDog) {
    var val = catOrDog;
    var result = false;

    if (board[0] === val && board[1] === val && board[2] === val) {
      result = true;
    } else if (board[3] === val && board[4] === val && board[5] === val) {
      result = true;
    } else if (board[6] === val && board[7] === val && board[8] === val) {
      result = true;
    } else if (board[0] === val && board[3] === val && board[6] === val) {
      result = true;
    } else if (board[1] === val && board[4] === val && board[7] === val) {
      result = true;
    } else if (board[2] === val && board[5] === val && board[8] === val) {
      result = true;
    } else if (board[0] === val && board[4] === val && board[8] === val) {
      result = true;
    } else if (board[2] === val && board[4] === val && board[6] === val) {
      result = true;
    }
    return result;
  }

  // Game resets when button click event occurs
  function resetGame() {
    // Goes through each element that has the (.square) class
    $(".square").each(function() {
      // Sets every element that has the square class to an empty string
      $(this).html("");
    });
    // Resets background, winner html and title
    $("body").css("background-image", "none");
    $("h3").html("");
    $("#gametitle").html('<img class="pawprint" src="http://www.nashvillewraps.com/images/large_stkno/ppc.jpg"/>Tic Tac <span class="changename">Toe</span><img class="pawprint" src="http://www.nashvillewraps.com/images/large_stkno/ppc.jpg"/>');
    // Sets the counter back to 0
    count = 0;
    // Sets the board array to empty strings
    board = ['', '', '', '', '', '', '', ''];
  }


  function setBanner(player) {
    if (player === 0) {
      $(".changename").html("Meow").css("color", "red");
    } else {
      $(".changename").html("Woof").css("color", "red");
    }
  }

  function addToScoreboard(player) {
    scores[player] += 1;
  }

});

//Things to improve:
//variables
//count to clickCount

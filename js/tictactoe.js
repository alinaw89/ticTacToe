var player = 0;

var players=['<img src="http://cache1.asset-cache.net/xt/887210-001.jpg?v=1&g=fs1%7C0%7CTSIR%7C72%7C101&s=1">', '<img src="http://media-cache-ec0.pinimg.com/236x/3e/b7/c5/3eb7c5bbbda15079ed8c1b9c9741d846.jpg">'];

var playerNames=["Sir Meowington", "Sir Puppington"];

var count = 0;

// Each element will have:
//  a empty string if the corresponding square has NOT been selected.
//  a cat image if a Cat was selected
//  a dog image if a dog was selected
var board = ['', '', '', '', '', '', '', '']; //created empty board to track what squares have been clicked clicked
var boardIndex;
var drawCat = true;
var foundWinner = false;


$(document).ready(function(){ //1.event that fires when the html has been loaded
  $("button").click(resetGame);//variable that points to a function

  //beginning of square click handler
  //game loop
  $(".square").click(function(event){ //Setting a click handler on every element that has class (.square)

    if($(this).html() === ""){ //the "this" represents the one element that is being clicked; see if the current elements of html is empty, if they are set that equal to an empty string
      $(this).html(players[player]); //inserts the img tag; selecting one of the two images to be displayed in the square

      // get the id of the element that was clicked
      boardIndex = event.target.id; //give me the id of the element i clicked on, that will be a number that used as an index into the board array

      if(drawCat){
        // set the board item to 'cat' using the id from the square clicked
        board[boardIndex] = 'cat';
        // is the cat a winner?
        foundWinner = getWinner('cat');
        // next time draw a dog
        drawCat = false; //drawcat is false so that next time we will draw a dog
      }else{
        // set the board item to 'dog' using the id from the square clicked
        board[boardIndex] = 'dog';
        // is the dog a winner?
        foundWinner = getWinner('dog');
        // next time you'll draw a cat
        drawCat = true;
      }

      if (foundWinner){
        // Hey, either the cat or the dog won. So, show it's name
        $("h3").html("Winner: " + playerNames[player]);
        // And show it's picture as a winner
        $("body").css("background-image", "url('http://filme-carti.ro/wp-content/uploads/2014/05/urme-de-laba.jpg')");
        // Change banner to Meow or Woof
        setBanner(player);
      //if there is no winner and if the counter is to 8
      } else if (!foundWinner && count === 8){
        // No winner after 9 clicks, game over
        $("h3").html("Game Over! No winner.");
        resetGame();
      } else{
        // No winner and game not over so switch image for next player (dog or cat)
        $(".turn").html(players[1-player]); //switch img
      }

      togglePlayer();
      count += 1;
    }

  }); // end of square click handler

  function togglePlayer(){ //accesses the global variable
    player = 1- player;
  }


  function getWinner(catOrDog){
    var val = catOrDog;
    var result = false;

    if(board[0] === val && board[1] === val && board[2] === val){
      result = true;
    }else if(board[3] === val && board[4] === val && board[5] === val){
      result = true;
    }else if(board[6] === val && board[7] === val && board[8] === val){
      result = true;
    }else if(board[0] === val && board[3] === val && board[6] === val){
     result = true;
    }else if(board[1] === val && board[4] === val && board[7] === val){
     result = true;
    }else if(board[2] === val && board[5] === val && board[8] === val){
     result = true;
    }else if(board[0] === val && board[4] === val && board[8] === val){
     result = true;
    }else if(board[2] === val && board[4] === val && board[6] === val){
     result = true;
    }
    return result;
  }


  function resetGame(){ //this is executed when the button click event occurs
    $(".square").each(function(){
      $(this).html("");
    });
     $("body").css("background-image", "none");
    $("h3").html("");
    count = 0;
    board = ['', '', '', '', '', '', '', ''];
  }


  function setBanner(player){
    if (player === 0){
      $(".changename").html("Meow").css("color", "red");
    } else{
       $(".changename").html("Woof").css("color", "red");
    }
  }

});





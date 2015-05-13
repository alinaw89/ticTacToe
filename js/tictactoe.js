var player = 0;

var players=['<img src="http://www.cats.org.uk/uploads/images/pages/photo_latest14.jpg">', '<img src="http://i480.photobucket.com/albums/rr163/NinjaShade_04/HuskyPuppy.jpg">'];

var playerNames=["Sir Meowsworth", "Sir Puppington"];

var count=0;

$(document).ready(function(){ //1.event that fires when the html has been loaded
  $("button").click(resetGame);//variable that points to a function

  //beginning of square click handler
  //game loop
  $(".square").click(function(){ //Setting a click handler on every element that has class (.square)

    if($(this).html() === ""){ //the "this" represents the one element that is being clicked; see if the current elements of html is empty, if they are set that equal to an empty string
      $(this).html(players[player]); //inserts the img tag; selecting one of the two images to be displayed in the square

      var playerArray=[];             //resets the board array
      $(".square").each(function(){   //re-load the board array based on the current state of the HTML
        playerArray.push($(this).html()); //so, if there are img tags it will place itself in that array, it returns an empty string instead
      }) //

      if (getWinner(playerArray)){
        $("h3").html("Winner: " + playerNames[player]);
        $("body").css("background-image", "url('http://filme-carti.ro/wp-content/uploads/2014/05/urme-de-laba.jpg')");
        setBanner(player);
      //if there is no winner and if the counter is to 8
      } else if (!getWinner(playerArray) && count === 8){
        $("h3").html("Game Over! No winner.");
      } else{
        $(".turn").html(players[1-player]); //switch img
      }
      togglePlayer();
      count+=1;
    }

  }); // end of square click handler

  function togglePlayer(){ //accesses the global variable
    player = 1- player;
  }

  function getWinner(playerArray){
    var ret;
    for (var i = 0; i < players.length; i++) {
      if (playerArray[0] === players[i] && playerArray[1] === players[i] && playerArray[2] === players[i]){
        ret = true;
    } else if (playerArray[3] === players[i] && playerArray[4] === players[i] && playerArray[5] === players[i]){
        ret = true;
      } else if (playerArray[6] === players[i] && playerArray[7] === players[i] && playerArray[8] === players[i]){
        ret = true;
      } else if (playerArray[0] === players[i] && playerArray[3] === players[i] && playerArray[6] === players[i]){
        ret = true;
        } else if (playerArray[1] === players[i] && playerArray[4] === players[i] && playerArray[7] === players[i]){
        ret = true;
      } else if (playerArray[2] === players[i] && playerArray[5] === players[i] && playerArray[8] === players[i]){
        ret = true;
      } else if (playerArray[0] === players[i] && playerArray[4] === players[i] && playerArray[8] === players[i]){
        ret = true;
      } else if (playerArray[2] === players[i] && playerArray[4] === players[i] && playerArray[6] === players[i]){
        ret = true;
      }
    }
    return ret;
  }

  function resetGame(){ //this is executed when the button click event occurs
    $(".square").each(function(){
      $(this).html("");
    });
    $("body").css("background-image", "none");
    $("h3").html("");
    count = 0;
  }


  function setBanner(player){
    if (player === 0){
      $(".changename").html("Meow").css("color", "red");
    } else{
       $(".changename").html("Woof").css("color", "red");
    }
  }

});





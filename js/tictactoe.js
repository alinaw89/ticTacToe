var player = 0;

var players=['<img src="http://www.cats.org.uk/uploads/images/pages/photo_latest14.jpg">', '<img src="http://i480.photobucket.com/albums/rr163/NinjaShade_04/HuskyPuppy.jpg">'];

var playerNames=["Sir Meowsworth", "Sir Puppington"];

var count=0;

$(document).ready(function(){
  $("button").click(function(){
     resetGame();
  })
  $(".square").click(function(){ //game loop

    if($(this).html() === ""){


    var playerArray=[]; //reset the board array
     $(this).html(players[player]);
     $(".square").each(function(){
      playerArray.push($(this).html());
     })
     console.log(playerArray);
    if (getWinner(playerArray)){
      $("h3").html("Winner: " + playerNames[player]);
      $("body").css("background-image", "url('http://filme-carti.ro/wp-content/uploads/2014/05/urme-de-laba.jpg')");
      setBanner(player);


      //if there is no winner and if the counter is to 8
    } else if (!getWinner(playerArray) && count === 8){
      $("h3").html("DRAW! No winner.");
    }else{
      $(".turn").html(players[1-player]); //switch img
    }

       togglePlayer();
       count+=1;
}

  });

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

  function resetGame(){
    $(".square").each(function(){
     $(this).html("");
   });
    $("body").css("background-image", "none");
    $("h3").html("");
    count=0;
  }


  function setBanner(player){
    if (player === 0){
      $(".changename").html("Meow").css("color", "red");
    } else{
       $(".changename").html("Woof").css("color", "red");
    }
  }

});





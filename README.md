HTML:
Created HTML page using bootstrap that sets up a 3X3 grid

CSS:
Defined certain elements of the css

JS:

Overview:
  I rendered a tictactoe gameboard to play in a browser which switches turns between two players(ie:a cat image and a dog image). It will display which player has won once a player selects three squares in a row.
  It will also display if there is a tie (no win).

User Stories:
  User Story 1: User should see a tic tac toe board on the main page.
  User Story 2: User should be able to click the board and place x in any space they choose.
  User Story 3: User should be able to alternate turns between cat image and dog image.
  User Story 4: User should be able to win if three in a row
  User Story 5: Game should display a draw if no winner

Steps taken to produce code:

  1. I start with creating a jQuery document.ready function where we load our entire HTML docment.

  2. I introduce the .square class into the jQuery selector into a click function. When the user clicks a certain square, the following code occurs:
    a. An if statement holds a condition where if the selected class (in this case, every div labeled with a .square class) in the html is set equal to an empty string: then it will allow the user to click on that square, fill it in with either the cat or dog player. If a user already clicked on that div, they cannot click the same div and switch the player. The players (cat and dog images) are held in an array called "players". This comes into play after the user clicks on the board.

    b. I introduce a new array called playerArray which will reset the board(array) every time a user clicks. This way, we will not keep adding a new array each time. The array length will remain as 9 (playerArray.length === 9).

    c. At this point, when a user selects the html elements that hold the square class (the divs), the players image will appear in the html page (the browser)

    d. The selector is introduced again where the class square is placed in it. I use the .each function to select eat div with the square class. When a user selects the square/div on the browser, an image is passed through and pushed into the playerArray. I chose to print the playerArray to the console after this step. This is optional.

    e. The togglePlayer() function is the next step. It accesses the global variable of player which is set to 0 (or the cat image). This means that the cat player immediately gets to go first. Then, the player = 0 runs through the following code: player = 1 - player. This will set the variable player to 1 which will then be displayed in the html once the user clicks on a square. It will also be pushed to the playerArray.

    f. The getWinner() function iterates through all of the possible win conditions in the 3 x 3 tic tac toe game. Instead of selecting players[0] and players[2], I set it to player[i] and just used a for loop to iterate through the elements. Because you can only return once in a function, I stored "return" in a variable called ret. At the end, ret is returned and the winner is set.

    g. If you refer back to the if getWinner statement in the document.ready function, you will see that getWinner is passed an argument of playerArray. If either players[0] or players[1] has won, the text written in the h3 tag in html will display the winner by passing the "player= 0" (or the cat image)into the playerNames array.

    If the player does not equal the cat image, then the else statement will refer to the .turn class and pass into the html the [1-player] which will set the player to 1 and will grab that player out of the players array. This is how you will see the images change on the screen depending on which player is going first.

    h.

// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn;
let player2Turn;

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent="Player turn";

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    message.textContent="Roll Dice to konw Player"
if(randomNumber %2 !==0){
    player1Turn=true;
    player2Turn=false;
     player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn";
      
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active")
}
    else if (randomNumber %2 ===0) {
        player2Turn=true;
        player1Turn=false;
       player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
    } 
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        message.classList.add('winner1');
       
        showResetButton()
        resetBtn.addEventListener("click", function(){
    reset()
})
  }  
    else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉";
        message.classList.add('winner1');
       
        showResetButton()
        resetBtn.addEventListener("click", function(){
    reset()
})
    }
    //player1Turn = !player1Turn
    
   
function reset(){
    player1Score = 0
    player2Score = 0
    message.textContent="Player turn";
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
   player1Dice.classList.remove("active")
        player2Dice.classList.remove("active")
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    message.classList.remove('winner1')
    
}
 });

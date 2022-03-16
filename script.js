

// window.alert("Welcome to the game")
let wins = 0;
let losses = 0;
let ties = 0;
let replay = true;


while (replay == true) {
let userChoice = prompt("Welcome to Rock, Paper, Scissors! \n Which do you choose?");

let computerChoice  = ["Rock", "Paper", "Scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random(3) * max);
  }

let output = getRandomInt(3);

let opponent = computerChoice[output];

console.log(userChoice);
console.log(opponent);

if (userChoice == opponent) {
    ties++;
    window.alert("The computer chose " + opponent + " - It's a tie!")
} else if 
((userChoice == "rock" && opponent == "Scissors") ||
(userChoice == "paper" && opponent == "Rock") ||
(userChoice == "scissors" && opponent == "Paper"))  {
    wins++;
    window.alert("The computer chose " + opponent + " - You win!")
} else {
    losses++;
    window.alert("The computer chose " + opponent + " - You Lose!")
}

var displayScore = function() {
window.alert("Wins: " + wins + "\n Losses: " + losses + "\n Ties: " + ties )
}

displayScore();

let replay = confirm("Do you want to play again?");

} 
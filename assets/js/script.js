

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
    window.alert("The computer chose " + opponent + " - It's a tie!");
} else if 
((userChoice == "rock" && opponent == "Scissors") ||
(userChoice == "paper" && opponent == "Rock") ||
(userChoice == "scissors" && opponent == "Paper"))  {
    wins++;
    window.alert("The computer chose " + opponent + " - You win!");
} else {
    losses++;
    window.alert("The computer chose " + opponent + " - You Lose!");
}

var displayScore = function() {
window.alert("Wins: " + wins + "\n Losses: " + losses + "\n Ties: " + ties )
}

displayScore();

replay = confirm("Do you want to play again?");
}




if ((wins > losses ) && (wins > ties)) {
    document.body.setAttribute("style", "background-color: green");
    var headerEl = document.createElement("h2");
    headerEl.textContent = "YOU WIN!!";
    document.body.appendChild(headerEl);
    document.body.children[2].setAttribute("style", `font-size: ${wins * 10 + 50}px`);
} else if ((ties > losses) && (ties > wins)) {
    document.body.setAttribute("style", "background-color: yellow");
    var headerEl = document.createElement("h2");
    headerEl.textContent = "IT's A TIE!";
    document.body.appendChild(headerEl);
    document.body.children[2].setAttribute("style", `font-size: ${ties* 10 + 50}px`);
} else {
    document.body.setAttribute("style", "background-color: red");
    var headerEl = document.createElement("h2");
    headerEl.textContent = "YOU LOSE";
    document.body.appendChild(headerEl);
    document.body.children[2].setAttribute("style", `font-size: ${losses * 10 + 50}px`);
}

var listEl = document.createElement("ul");
var li1 = document.createElement("li")
var li2 = document.createElement("li")
var li3 = document.createElement("li")
var li4 = document.createElement("li")

li1.textContent = "FINAL SCORES";
// li1.setAttribute("style", "font-size: 150%");
li2.textContent = `Wins: ${wins}`;
li3.textContent = `Losses: ${losses}`;
li4.textContent = `Ties: ${ties}`;

document.body.appendChild(li1);
document.body.appendChild(li2);
document.body.appendChild(li3);
document.body.appendChild(li4);
document.body.appendChild(listEl);
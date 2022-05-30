function singleRound(playerSelection, computerSelection) {
}

function computerPlay(computerSelection) {
    return computerSelection[Math.floor(Math.random()*computerSelection.length)]
}

let handStyles = ["rock", "paper", "scissors"];
let playerSelection = prompt("Rock, Paper Or Scissors?").toLowerCase();

let computerSelection = computerPlay(handStyles);
let gameWinner = singleRound(playerSelection, computerSelection);

console.log(computerSelection)
console.log(playerSelection);
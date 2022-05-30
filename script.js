function game() {
    /* Weapon list*/
    let weaponOfChoice = ["rock", "paper", "scissors"];

    /* Points */
    let userPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        /* Let user choose weapon */
        let playerSelection = prompt("Rock, Paper Or Scissors?").toLowerCase();
        /* Let Computer "choose" weapon */
        let computerSelection = computerPlay(weaponOfChoice);

        let roundScore = playRound(playerSelection, computerSelection);

        if (roundScore == 1) {
            userPoints += 1;
        } else if (roundScore == 3) {
            computerPoints += 1;
        } else {
            continue
        }
    }
    let endGameMessage = gameWinner(userPoints, computerPoints);

    console.log(
        `Your points: ${userPoints} 
        Computer points: ${computerPoints} 
        ${endGameMessage}`);
}

function gameWinner(user, computer) {
    const winGameMessage = `YOU WON THE GAME!`;
    const loseGameMessage = `YOU LOST THE GAME!`;
    const tieGameMessage = `IT'S A TIE!`;
    if (user > computer) {
        return winGameMessage;
    } else if (user < computer) {
        return loseGameMessage;
    } else {
        return tieGameMessage;
    }
}


function playRound(playerSelection, computerSelection) {

    const winRoundMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
    const loseRoundMessage = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    const tieRoundMessage = `It's a tie! Both chose ${playerSelection}.`

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(winRoundMessage);
        return 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log(winRoundMessage);
        return 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(winRoundMessage);
        return 1;
    } else if (playerSelection == computerSelection) {
        console.log(tieRoundMessage);
        return 2;
    } else {
        console.log(loseRoundMessage);
        return 3
    }
}

function computerPlay(computerSelection) {
    return computerSelection[Math.floor(Math.random() * computerSelection.length)]
}

game();

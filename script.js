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
    console.log(`Your points: ${userPoints} Computer points: ${computerPoints}`);
}


function playRound(playerSelection, computerSelection) {

    const winMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
    const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    const tieMessage = `It's a tie! Both chose ${playerSelection}.`

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(winMessage);
        return 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log(winMessage);
        return 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(winMessage);
        return 1;
    } else if (playerSelection == computerSelection) {
        console.log(tieMessage);
        return 2;
    } else {
        console.log(loseMessage);
        return 3
    }
}

function computerPlay(computerSelection) {
    return computerSelection[Math.floor(Math.random() * computerSelection.length)]
}

game();

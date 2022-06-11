let computerScore = 0;
let playerScore = 0;
let weaponOfChoice = ["rock", "paper", "scissors"];
let playAgain = document.querySelector('.playAgain');


// Announce Game Winner
function announceGameWinner(playerScore, computerScore) {
    let totalAnnounce = document.querySelector('.totalScore');
    if (playerScore > computerScore) {
        totalAnnounce.innerText = 'You won the game and beat the computer!';
    } else {
        totalAnnounce.innerText = 'The computer won this game!';
    }
    playAgain.style.display = 'block';
    document.querySelector('.roundResult').innerText = '';

}

/* Game Round Function */
function playRound(playerChoice) {

    let computerChoice = computerPlay(weaponOfChoice);

    const winRoundMessage = `You win! ${playerChoice} beats ${computerChoice}.`;
    const loseRoundMessage = `You Lose! ${computerChoice} beats ${playerChoice}.`;
    const tieRoundMessage = `It's a tie! Both chose ${playerChoice}.`

    let roundResult = document.querySelector('.roundResult')


    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        roundResult.innerText = winRoundMessage;
        roundResult.style.color = "green";
        playerScore++;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        roundResult.innerText = winRoundMessage;
        roundResult.style.color = "green";
        playerScore++;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        roundResult.innerText = winRoundMessage;
        roundResult.style.color = "green";
        playerScore++;
    } else if (playerChoice == computerChoice) {
        roundResult.innerText = tieRoundMessage;
        roundResult.style.color = "blue";
    } else {
        roundResult.innerText = loseRoundMessage;
        roundResult.style.color = "red";
        computerScore++;
    }


    document.querySelector('.playerScore').innerText = playerScore;
    document.querySelector('.computerScore').innerText = computerScore;
}

/* Computer choice function */
function computerPlay(computerChoice) {
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    console.log(playerScore, computerScore)
    button.addEventListener('click', function () {
        if (playerScore == 5 || computerScore == 5) {
            return;
        }

        playRound(button.id);

        if (playerScore == 5 || computerScore == 5) {
            announceGameWinner(playerScore, computerScore);
        }
    });
})

playAgain.addEventListener('click', function () {
    playerScore = 0;
    document.querySelector('.playerScore').innerText = '0';
    computerScore = 0;
    document.querySelector('.computerScore').innerText = '0';
    playAgain.style.display = 'none';
    document.querySelector('.roundResult').innerText = '';
    document.querySelector('.totalScore').innerText = '';
})








let playerScore = 0;
let computerScore = 0;
const displayResult = document.getElementById("result");
const playerScoreDisplay = document.querySelector("p.player-score");
const computerScoreDisplay = document.querySelector("p.computer-score");

const playButtons = document.querySelectorAll("button.play-btn");
playButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.innerText;
        playOneRound(playerSelection, getComputerChoice());
    })
})

const resetButton = document.getElementById("reset");
resetButton.addEventListener('click', resetGame);

function getComputerChoice() {
    const COMPUTER_CHOICES = ["Rock", "Paper", "Scissors"];
    return COMPUTER_CHOICES[Math.floor(Math.random() * 3)];
}

function playOneRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        displayResult.innerText = "This is a tie!";
    } else if (playerSelection == "Rock" && computerSelection == "Paper" ||
        playerSelection == "Paper" && computerSelection == "Scissors" ||
        playerSelection == "Scissors" && computerSelection == "Rock") {
        displayResult.innerText = `You lose! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
    } else {
        displayResult.innerText = `You Win! ${playerSelection} beats ${computerSelection}!`;
        playerScore++;
    }
    updateScores()
    checkForWinner();
}

function checkForWinner() {
    if (playerScore > 4) {
        displayResult.innerText = "You Win!";
        endGame();
    } else if (computerScore > 4) {
        displayResult.innerText = "You Lose!";
        endGame();
    }
    function endGame() {
        resetButton.hidden = false;
        playButtons.forEach((button) => {
            button.disabled = true;
        });
    }
}

function updateScores() {
    playerScoreDisplay.innerHTML = `Player Score: ${playerScore}`;
    computerScoreDisplay.innerHTML = `Computer Score: ${computerScore}`;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resetButton.hidden = true;
    displayResult.innerText = '';
    playButtons.forEach((button) => {
        button.disabled = false;
    });
    updateScores()
}
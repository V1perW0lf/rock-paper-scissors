function getComputerChoice() {
    const computer_choices = ["Rock", "Paper", "Scissors"];
    return computer_choices[Math.floor(Math.random() * 3)];
}

function playOneRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return `This round is a tie!`
    } else if (playerSelection == "Rock" && computerSelection == "Paper" || 
               playerSelection == "Paper" && computerSelection == "Scissors" ||
               playerSelection == "Scissors" && computerSelection == "Rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    } else {
        return `You Win! ${playerSelection} beats ${computerSelection}!`
    }
}
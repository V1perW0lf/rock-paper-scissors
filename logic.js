function getComputerChoice() {
    const computer_choices = ["Rock", "Paper", "Scissors"];
    return computer_choices[Math.floor(Math.random() * 3)];
}

function playOneRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return [`This round is a tie!`, 0]
    } else if (playerSelection == "Rock" && computerSelection == "Paper" || 
               playerSelection == "Paper" && computerSelection == "Scissors" ||
               playerSelection == "Scissors" && computerSelection == "Rock") {
        return [`You lose! ${computerSelection} beats ${playerSelection}!`, -1]
    } else {
        return [`You Win! ${playerSelection} beats ${computerSelection}!`, 1]
    }
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let input = prompt("What is your selection?", "")
        let selection = input.charAt(0).toUpperCase() + input.slice(1);
        let result = playOneRound(selection, getComputerChoice())
        score += result[1];
        console.log(result[0]);
    }
    if(score > 0) {
        console.log("You win!");
    } else if (score == 0) {
        console.log("It's a tie!");
    } else {
        console.log("You lose!");
    }
}
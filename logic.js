function getComputerChoice() {
    const computer_choices = ["Rock", "Paper", "Scissors"];
    return computer_choices[Math.floor(Math.random() * 3)];
}
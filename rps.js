function getComputerChoice() {
    var computerChoice = ""
    var rand_choice = Math.floor(Math.random() * 4) + 1;
    
    if (rand_choice === 1) {
        computerChoice = "Rock"
    } else if (rand_choice === 2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }

    return computerChoice
    
}

console.log(getComputerChoice())
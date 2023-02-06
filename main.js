let choices = ['Rock', 'Paper', 'Scissors'];
let roundsToPlay = 5;
let getComputerChoice = () => choices[Math.floor( Math.random() * choices.length)];

let playRound = (computerSelection, playerSelection) => {
    
    //standardizes playerSelection
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    //shitty logic
    if (playerSelection == computerSelection) {
        return 'Tie!';
    } else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        return 'You win! Paper covers rock!';
    } else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
        return 'You lose! Rock crushes scissors!';
    } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        return 'You lose! Paper covers rock!';
    } else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
        return 'You win! Scissors cut paper!';
    } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        return 'You lose! Scissors cut paper!';
    } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        return 'You win! Rock crushes scissors!';
    } else {
        return 'I fucked up the code!';
    }

};

let game = () => {
    let computerScore = 0;
    let playerScore = 0;

    //running the matches
    for (let i = 0; i < roundsToPlay; i++) {
        let announcement = playRound(getComputerChoice(),window.prompt('Make a choice!', 'Rock, Paper, or Scissors'));
        console.log(announcement);
        if (announcement.includes('win')) {
            playerScore++;
        } else if (announcement.includes('lose')) {
            computerScore++;
        }
     }

     //determining winner
     if (computerScore > playerScore) {
        console.log("Computer Won!");
     } else if (computerScore < playerScore) {
        console.log("Player won!");
     } else {
        console.log("Draw!");
     }

};

game();

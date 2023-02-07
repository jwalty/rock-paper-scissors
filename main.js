let choices = ['Rock', 'Paper', 'Scissors'];
let bestTo = 5;
let computerScore = 0;
let playerScore = 0;
let winner = false;

let playRound = (playerSelection) => {

    let computerSelection = choices[Math.floor( Math.random() * choices.length)]
    let annoucement = "";
    
    //standardizes playerSelection
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    //shitty logic
    if (playerSelection == computerSelection) {
        annoucement = 'Tie!';
    } else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        annoucement = 'You win! Paper covers rock!';
        playerScore++;
    } else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
        annoucement = 'You lose! Rock crushes scissors!';
        computerScore++;
    } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        annoucement = 'You lose! Paper covers rock!';
        computerScore++;
    } else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
        annoucement = 'You win! Scissors cut paper!';
        playerScore++;
    } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        annoucement = 'You lose! Scissors cut paper!';
        computerScore++;
    } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        annoucement = 'You win! Rock crushes scissors!';
        playerScore++;
    }

    //update DOM
    document.querySelector('#playerScore').textContent = playerScore;
    document.querySelector('#computerScore').textContent = computerScore;
    document.querySelector('#annoucement').textContent = annoucement;

    if (winner == false) {
        if (playerScore == 5) {
            window.alert('Player win! Great job!');
            winner = true;
        } else if (computerScore == 5) {
            window.alert('Computer win! You suck!');
            winner = true;
        }

    }


};


let game = () => {

     //determining winner
     if (computerScore > playerScore) {
        console.log("Computer Won!");
     } else if (computerScore < playerScore) {
        console.log("Player won!");
     } else {
        console.log("Draw!");
     }

};

const container = document.querySelector('#container')
const buttons = container.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {playRound(button.id)});
});
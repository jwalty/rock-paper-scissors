let choices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let winner = false;

let playRound = (playerSelection) => {

    //pick a random choice and select the button for 
    let computerSelection = choices[Math.floor( Math.random() * choices.length)];
    let computerSelectionButton = document.querySelector(`#${computerSelection}`);

    //this timeout function sets a delay for computer response
    setTimeout(function(){

        //creates computer flash animation
        computerSelectionButton.classList.add('animation');
        setTimeout(function(){
            computerSelectionButton.classList.remove('animation');
        },500);

        //reset annoucement
        let annoucement = "";

        //shitty logic
        if (playerSelection == computerSelection) {
            annoucement = 'Tie!';
        } else if (computerSelection == 'rock' && playerSelection == 'paper') {
            annoucement = 'You win! Paper covers rock!';
            playerScore++;
        } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
            annoucement = 'You lose! Rock crushes scissors!';
            computerScore++;
        } else if (computerSelection == 'paper' && playerSelection == 'rock') {
            annoucement = 'You lose! paper covers rock!';
            computerScore++;
        } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
            annoucement = 'You win! Scissors cut paper!';
            playerScore++;
        } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
            annoucement = 'You lose! Scissors cut paper!';
            computerScore++;
        } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
            annoucement = 'You win! Rock crushes scissors!';
            playerScore++;
        } else {
            annoucement = 'error';
        }
    
        //update DOM
        document.querySelector('#playerScore').textContent = playerScore;
        document.querySelector('#computerScore').textContent = computerScore;
        document.querySelector('#annoucement').textContent = annoucement;
    
        //check for first-to-five winner
        if (winner == false) {
            if (playerScore == 5) {
                window.alert('Player win! Great job!');
                winner = true;
            } else if (computerScore == 5) {
                window.alert('Computer win! You suck!');
                winner = true;
            }
    
        }

    },500);

};

//adding functionality to buttons
const choiceContainer = document.querySelector('#choiceContainer')
const choiceButtons = choiceContainer.querySelectorAll('i');

choiceButtons.forEach((e) => {
    e.addEventListener('click', () => {
        playRound(e.id);

    });
});


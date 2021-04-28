const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const round = document.querySelector('#round');
const pScore = document.querySelector('#pscore');
const cScore = document.querySelector('#cscore');
const container = document.querySelector('#flex-container');
const winner = document.querySelector('#winner');
const trophy = document.querySelector('#trophy');
const frown = document.querySelector('#frown');

const content = document.createElement('div');
content.classList.add('content');

let playerScore = 0;
let computerScore = 0;

pScore.textContent = playerScore;
cScore.textContent = computerScore;

let currentScore = `
Player: ${playerScore}
Computer: ${computerScore}`;


rock.addEventListener('click', () => {
    playGame('Rock');
});

paper.addEventListener('click', () => {
    playGame('Paper');
});

scissors.addEventListener('click', () => {
    playGame('Scissors');
});

trophy.addEventListener('click', () => {
    location.reload();
    return false;
});

frown.addEventListener('click', () => {
    location.reload();
    return false;
});

function computerPlay() {
    const possiblePlays = ['Rock', 'Paper', 'Scissors'];
    const randomPlay = possiblePlays[Math.floor(Math.random()*possiblePlays.length)];
    return randomPlay;
}

function updateScore() {
    currentScore = `
Player: ${playerScore}
Computer: ${computerScore}`;
}

function playRound(playerSelection) {
    
    let computerSelection = computerPlay();

    if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
        content.textContent = 'You lose the round! Paper beats Rock.';
        round.appendChild(content)
        ++computerScore;
        updateScore();
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        content.textContent = 'You win the round! Rock beats Scissors.';
        round.appendChild(content);
        ++playerScore;
        updateScore();
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Rock')) {
        content.textContent = 'Draw: Rock vs Rock';
        round.appendChild(content); 
        updateScore();
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Paper')) {
        content.textContent = 'Draw: Paper vs Paper';
        round.appendChild(content);
        updateScore();
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Scissors')) {
        content.textContent = 'You lose the round! Scissors beats Paper.';
        round.appendChild(content);
        ++computerScore;
        updateScore();
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        content.textContent = 'You win the round! Paper beats Rock.';
        round.appendChild(content);
        ++playerScore;
        updateScore();
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        content.textContent = 'You win the round! Scissors beats Paper';
        round.appendChild(content);
        ++playerScore;
        updateScore();
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Scissors')) {
        content.textContent = 'Draw: Scissors vs Scissors';
        round.appendChild(content);
        updateScore();
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
        content.textContent = 'You lose the round! Rocks beats Scissors.';
        round.appendChild(content);
        ++computerScore;
        updateScore();
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
    }
}

function playGame(playerSelection) {

    playRound(playerSelection);

    if (playerScore == 5){
        rock.remove();
        paper.remove();
        scissors.remove();
        winner.textContent = 'Have a trophy!';
        trophy.classList.add('fas', 'fa-trophy');


    } else if(computerScore == 5){
        rock.remove();
        paper.remove();
        scissors.remove();
        winner.textContent = 'No trophy for you.';
        frown.classList.add('far', 'fa-sad-tear');
    }
}
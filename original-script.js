let playerScore = 0;
let computerScore = 0;
let currentScore;
let computerSelection;
let playerSelection;

function capitalise(str) {
    let firstLetter = str.slice(0, 1);
    let otherLetters = str.substring(1);
    return firstLetter.toUpperCase() + otherLetters.toLowerCase();
    }

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

function playRound() {
    
    computerSelection = computerPlay();
    playerSelection = capitalise(prompt('Pick a move'));

    if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
        ++computerScore;
        updateScore()
        return 'You lose! Paper beats Rock.' + currentScore;
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        ++playerScore;
        updateScore()
        return 'You win! Rock beats Scissors.' + currentScore;
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Rock')) {
        updateScore()
        return 'It\'s a draw! Rock vs Rock.' + currentScore;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Paper')) {
        updateScore()
        return 'It\'s a draw! Paper vs Paper.' + currentScore;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Scissors')) {
        ++computerScore;
        updateScore()
        return 'You lose! Scissors beats Paper.' + currentScore;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        ++playerScore;
        updateScore()
        return 'You win! Paper beats Rock.' + currentScore;
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        ++playerScore;
        updateScore()
        return 'You win! Scissors beats Paper.' + currentScore;  
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Scissors')) {
        updateScore()
        return 'It\'s a draw! Scissors vs Scissors.' + currentScore;
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
        ++computerScore;
        updateScore()
        return 'You lose! Rock beats Scissors.' + currentScore;
    }
}


function game() {
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
}


game()

if (playerScore > computerScore) {
    console.log('You are a big winner!');
} else if (playerScore < computerScore) {
    console.log( 'You are a big loser!');
} else {
    console.log('Draw.');
}  
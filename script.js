function capitalize(str) {
    let firstLetter = str.slice(0, 1);
    let otherLetters = str.substring(1);
    return firstLetter.toUpperCase() + otherLetters.toLowerCase();
    }

function computerPlay() {
    const possiblePlays = ['Rock', 'Paper', 'Scissors'];
    const randomPlay = possiblePlays[Math.floor(Math.random()*possiblePlays.length)];
    return randomPlay;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
    return 'You lose! Paper beats Rock.';
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
    return 'You win! Rock beats Scissors.';
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Rock')) {
    return 'It\'s a draw! Rock vs Rock.';
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Paper')) {
    return 'It\'s a draw! Paper vs Paper.';
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Scissors')) {
    return 'You lose! Scissors beats Paper.';
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
    return 'You win! Paper beats Rock.';
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
    return 'You win! Scissors beats Paper.';
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Scissors')) {
    return 'It\'s a draw! Scissors vs Scissors.';
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
    return 'You lose! Rock beats Scissors.';
    }
    
}

const playerSelection = capitalize(prompt('Pick a move'));
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
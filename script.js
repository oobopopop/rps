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

function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
        ++computerScore;
        currentScore = `

        Player: ${playerScore}
        Computer: ${computerScore}`;
        return 'You lose! Paper beats Rock.' + currentScore;
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        ++playerScore;
        currentScore = `

        Player: ${playerScore}
        Computer: ${computerScore}`;
        return 'You win! Rock beats Scissors.' + currentScore;
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Rock')) {
        currentScore = `

        Player: ${playerScore}
        Computer: ${computerScore}`;
        return 'It\'s a draw! Rock vs Rock.' + currentScore;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Paper')) {
        currentScore = `

        Player: ${playerScore}
        Computer: ${computerScore}`;
        return 'It\'s a draw! Paper vs Paper.' + currentScore;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Scissors')) {
        ++computerScore;
        currentScore = `

        Player: ${playerScore}
        Computer: ${computerScore}`;
        return 'You lose! Scissors beats Paper.' + currentScore;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        ++playerScore;
        currentScore = `

        Player: ${playerScore}
        Computer: ${computerScore}`;
        return 'You win! Paper beats Rock.' + currentScore;
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        ++playerScore;
        currentScore = `

        Player: ${playerScore}
        Computer: ${computerScore}`;
        return 'You win! Scissors beats Paper.' + currentScore;  
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Scissors')) {
        currentScore = `

        Player: ${playerScore}
        Computer: ${computerScore}`;
        return 'It\'s a draw! Scissors vs Scissors.' + currentScore;
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
        ++computerScore;
        currentScore = `

        Player: ${playerScore}
        Computer: ${computerScore}`;
        return 'You lose! Rock beats Scissors.' + currentScore;
    }
}

let playerScore = 0;
let computerScore = 0;
let currentScore = `

Player: ${playerScore}
Computer: ${computerScore}`;


const playerSelection = capitalise(prompt('Pick a move'));
const computerSelection = computerPlay();


console.log(playRound(playerSelection, computerSelection));
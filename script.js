

function computerPlay() {
    const possiblePlays = ['Rock', 'Paper', 'Scissors'];
    const randomPlay = possiblePlays[Math.floor(Math.random()*possiblePlays.length)];
    return randomPlay;
}

console.log(computerPlay())
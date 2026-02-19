//* let humanScoreNumber = 0 - Camel Case
// GAME_OPTIONS - Snake Case
// */

const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const machineChoiceText = document.querySelector('#machine-choice')
const humanChoiceText = document.querySelector('#human-choice')


//Camel Case
let humanScoreNumber = 0
let machineScoreNumber = 0

//ENUMS
const GAME_OPTIONS ={
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors', 
}

// objeto com emojis
const emojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌"
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randonNumber = Math.floor(Math.random() * 3)
    return choices[randonNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ', human + " Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate 😥"
    } 
    else if ((human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou 😍"
    } 
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu 😭"
    }

    // mostra emojis na tela
    humanChoiceText.innerHTML = emojis[human]
    machineChoiceText.innerHTML = emojis[machine]

}
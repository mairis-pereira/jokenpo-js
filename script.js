const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const machineChoiceText = document.querySelector('#machine-choice')
const humanChoiceText = document.querySelector('#human-choice')

let humanScoreNumber = 0
let machineScoreNumber = 0

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
    const choices = ['rock', 'paper', 'scissors']
    const randonNumber = Math.floor(Math.random() * 3)
    return choices[randonNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ', human + " Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate 😥"
    } 
    else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
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
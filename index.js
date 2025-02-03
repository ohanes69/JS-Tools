// Changer le texte : buttonButton.textContent = 'Nouveau texte'
let counter = 1

let buttonButton = document.getElementById('string')
buttonButton.addEventListener('click', () => {
    buttonButton.textContent = `Button cliqué x${counter}`
    counter++
})

// Incrémenter de 1 à chaque clique
let buttonNumber = document.getElementById("number")
buttonNumber.addEventListener('click', () => {
    buttonNumber.textContent = parseInt(buttonNumber.textContent) + 1;
})

// Reset à 0
let buttonReset = document.getElementById("reset")
buttonReset.addEventListener('click', () => {
    buttonNumber.textContent = '0'
})

// Enlever et mettre une autre couleur
let buttonColor = document.getElementById('change-color')
buttonColor.addEventListener('click', () => {
    buttonColor.classList.remove('bg-zinc-200')
    buttonColor.classList.add('bg-blue-200')
})

// Passer en mode jour et nuit
let buttonMoon = document.getElementById('moon')
buttonMoon.addEventListener('click', () => {
    document.body.classList.replace('bg-white', 'bg-black')
})

let buttonSun = document.getElementById('sun')
buttonSun.addEventListener('click', () => {
    document.body.classList.add('bg-black', 'bg-white')
})

// Afficher une couleur random pour le background
let buttonRandom = document.getElementById('random-color')
buttonRandom.addEventListener('click', () => {
    let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    buttonRandom.style.backgroundColor = randomColor
})

// Change le button 
let buttonValidate = document.getElementById('validate')
let buttonCancel = document.getElementById('cancel')

buttonValidate.addEventListener('click', () => {
    buttonValidate.classList.add('hidden')
    buttonCancel.classList.remove('hidden')
})

buttonCancel.addEventListener('click', () => {
    buttonCancel.classList.add('hidden')
    buttonValidate.classList.remove('hidden')
})

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

// Faire apparaître la pop-up lors du chargement de la page, puis la faire disparaître selon le choix du user
let popup = document.getElementById('pop-up')
setTimeout(() => {
    popup.classList.remove('hidden')
    setTimeout(() => {
        popup.classList.remove('opacity-0', 'scale-90', 'translate-y-4');
    }, 50);
}, 2000);

let croix = document.getElementById('croix')
croix.addEventListener('click', () => {
    popup.classList.add('hidden')
})

let like = document.getElementById('like')
like.addEventListener('click', () => {
    popup.classList.add('hidden')
})

// Permet de voir la progression de la lecture du texte
const progressBar = document.getElementById('progressBar')
const progressText = document.getElementById('progressText')
const scrollBar = document.getElementById('scrollBar')

scrollBar.addEventListener('scroll', () => {
    let scrollTop = scrollBar.scrollTop;
    let scrollHeight = scrollBar.scrollHeight - scrollBar.clientHeight;
    let progress = Math.round((scrollTop / scrollHeight) * 100);

    progress = Math.max(0, Math.min(progress, 100));

    progressText.textContent = progress + '%'

    progressBar.style.backgroundColor = `rgb(${200 - progress}, ${255 - progress}, ${100 - progress})`;
})

// Utilisation de 'mouseover' et 'mouseout'
const cursorOver = document.getElementById('cursorOver')
cursorOver.addEventListener('mouseover', () => {
    cursorOver.classList.add('p-4')
    cursorOver.classList.add('text-lg')
})

cursorOver.addEventListener('mouseout', () => {
    cursorOver.classList.remove('p-4')
    cursorOver.classList.remove('text-lg')
})

// Le conteneur apparaît lors du survol
const cursor = document.getElementById('cursor')
cursor.addEventListener('mouseover', () => {
    cursor.classList.add('rounded-lg', 'cursor-pointer', 'bg-violet-200', 'text-violet-500')
})

cursor.addEventListener('mouseout', () => {
    cursor.classList.remove('rounded-lg', 'cursor-pointer', 'bg-violet-200', 'text-violet-500')
})

// Le texte change lors du double cliques puis reviens au texte de base après 750
const doubleClick = document.getElementById('doubleClick')
doubleClick.addEventListener('dblclick', () => {
    doubleClick.innerHTML = '✔ Validé !';
    doubleClick.classList.add('bg-green-400', 'scale-105');

    setTimeout(() => {
        doubleClick.innerHTML = 'Double click'
    }, 750);
})
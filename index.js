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
    point.classList.replace('text-black', 'text-gray-200')
    betaAccess.classList.replace('bg-black', 'bg-white')
    betaAccess.classList.replace('text-white', 'text-black')
    twitter.classList.add('bg-amber-600')
})

let buttonSun = document.getElementById('sun')
buttonSun.addEventListener('click', () => {
    document.body.classList.add('bg-black', 'bg-white')
    twitter.classList.remove('bg-amber-600')
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

// Ajoute un padding lors du survol, changement de la couleur du texte
// 1
const cheese = document.getElementById('cheese')
const cheeseText = document.getElementById('cheese-text')

cheese.addEventListener('mouseover', () => {
    cheese.classList.remove('py-4')
    cheese.classList.add('py-6')
    cheeseText.classList.remove('text-red-400')
    cheeseText.classList.add('text-black')
})

cheese.addEventListener('mouseout', () => {
    cheese.classList.remove('py-6')
    cheese.classList.add('py-4')
    cheeseText.classList.remove('text-black')
    cheeseText.classList.add('text-red-400')
})

// 2
const chicken = document.getElementById('chicken')
const chickenText = document.getElementById('chicken-text')

chicken.addEventListener('mouseover', () => {
    chicken.classList.remove('py-4')
    chicken.classList.add('py-6')
    chickenText.classList.remove('text-red-400')
    chickenText.classList.add('text-black')
})

chicken.addEventListener('mouseout', () => {
    chicken.classList.remove('py-6')
    chicken.classList.add('py-4')
    chickenText.classList.remove('text-black')
    chickenText.classList.add('text-red-400')
})

// 3
const cheese2 = document.getElementById('cheese2')
const cheeseText2 = document.getElementById('cheese-text2')

cheese2.addEventListener('mouseover', () => {
    cheese2.classList.remove('py-4')
    cheese2.classList.add('py-6')
    cheeseText2.classList.remove('text-red-400')
    cheeseText2.classList.add('text-black')
})

cheese2.addEventListener('mouseout', () => {
    cheese2.classList.remove('py-6')
    cheese2.classList.add('py-4')
    cheeseText2.classList.remove('text-black')
    cheeseText2.classList.add('text-red-400')
})

// 4
const chicken2 = document.getElementById('chicken2')
const chicken2Text = document.getElementById('chicken2-text')

chicken2.addEventListener('mouseover', () => {
    chicken2.classList.remove('py-4')
    chicken2.classList.add('py-6')
    chicken2Text.classList.remove('text-red-400')
    chicken2Text.classList.add('text-black')
})

chicken2.addEventListener('mouseout', () => {
    chicken2.classList.remove('py-6')
    chicken2.classList.add('py-2')
    chicken2Text.classList.remove('text-black')
    chicken2Text.classList.add('text-red-400')
})

// Pour le scrool, CDN
document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
});

// you can CHANGE
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const textContainer = document.getElementById('textContainer');

function updateTextPosition() {
    const words = Array.from(textContainer.children); // converti en tableau les éléments

    words.forEach((word, index) => { // forEach parcours les éléments, index === un chiffre par éléments, 0 => 8
        word.classList.remove("opacity-100", "opacity-20");
        if (index === Math.floor(words.length / 2)) { 
            word.classList.add("opacity-100"); // add opacity-100 pour le mot au milieu => 4 - index - 4
        } else {
            word.classList.add("opacity-20"); // add opacity-20 pour les autres
        }
    });
}

prevBtn.addEventListener('click', () => {
    textContainer.prepend(textContainer.lastElementChild); // prepend ajoute le dernier élément (lastElementChild) à l’avant du conteneur 
    updateTextPosition(); // fonction appelée pour mettre à jour les classes d’opacité en fonction de l’ordre actuel des mots dans le conteneur
});

nextBtn.addEventListener('click', () => {
    textContainer.appendChild(textContainer.firstElementChild); 
    // firstElementChild récupère le premier le premier mot dans la liste
    // appendChild déplace cet élément à la fin du conteneur, il fait descendre le premier mot de la liste à la fin
    updateTextPosition();
});

updateTextPosition(); // Initialisation de l'affichage

// Landing Page Influs. jobs
const point = document.getElementById('point')

const betaAccess = document.getElementById('betaAccess')

const twitter = document.getElementById('twitter')

// Landing Page Penny
const menuChevron = document.getElementById('menuChevron');
const bottomChevron = document.getElementById('bottomChevron');

bottomChevron.addEventListener("mouseenter", () => {
    menuChevron.classList.remove('hidden');
});

menuChevron.addEventListener("mouseleave", () => {
    menuChevron.classList.add('hidden');
});

const menuChevron2 = document.getElementById('menuChevron2');
const bottomChevron2 = document.getElementById('bottomChevron2');

bottomChevron2.addEventListener("mouseenter", () => {
    menuChevron2.classList.remove('hidden');
});

menuChevron2.addEventListener("mouseleave", () => {
    menuChevron2.classList.add('hidden');
});

const menuChevron3 = document.getElementById('menuChevron3');
const bottomChevron3 = document.getElementById('bottomChevron3');

bottomChevron3.addEventListener("mouseenter", () => {
    menuChevron3.classList.remove('hidden');
});

menuChevron3.addEventListener("mouseleave", () => {
    menuChevron3.classList.add('hidden');
});
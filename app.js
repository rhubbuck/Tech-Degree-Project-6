const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const ul = document.querySelector('#phrase ul');
const overlay = document.getElementById('overlay');
const button = document.getElementsByTagName('button');
var missed; 
missed = 0;

const phrases = [
    'Once in a blue moon',
    'A piece of cake',
    'Feeling under the weather',
    'Blessing in disguise',
    'The best of both worlds'
];

btnReset.addEventListener ('click', (e) => {
    overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr) {
    let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase.split('');
}
console.log(getRandomPhraseAsArray(phrases));
const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
    for ( let i = 0; i < arr.length; i++){
        let li = document.createElement('li');
        li.textContent = arr[i].toLowerCase();
        ul.appendChild(li);
        if (li.textContent === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
    }
}
addPhraseToDisplay(phraseArray);

function checkLetter (button) {
    let letters = document.querySelectorAll('li');
    let match = null;
    for ( let i = 0; i < letters.length; i++) {
        if (button === letters[i].textContent.toLowerCase()) {
            letters[i].classList.add('show');
            letters[i].style.transition = '.5s ease-in';
            match = true;
        }
    }; 
    return match;
};

qwerty.addEventListener ('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = true;
        let match = checkLetter(e.target.textContent.toLowerCase());
        
        if (match === null) {
            missed ++;
            let lostLife = 5 - missed;
            let lives = document.querySelectorAll('img');
            lives[lostLife].setAttribute('src', 'images/lostHeart.png');
        }
        checkWin();
    }
});

function checkWin () {
    let letters = document.querySelectorAll('.letter');
    let showLetters = document.querySelectorAll('.show');
    let title = document.querySelector('.title');
    
    if (letters.length === showLetters.length){
        overlay.className = 'win';
        title.textContent = 'Congratulations, you won!';
        overlay.style.display = 'flex';
    } else if ( missed > 4){
        overlay.className = 'lose';
        title.textContent = 'Sorry, you lost. Better luck next time.';
        overlay.style.display = 'flex';
    }
    reset();
};

function reset() {
    btnReset.textContent = 'Play again';
    btnReset.addEventListener('click', () => {
    location.reload();
    });
};
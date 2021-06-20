const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.getElementsByClassName('btn__reset')[0];
const ul = document.querySelector('#phrase ul');
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
    document.getElementById('overlay').style.display = 'none';
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

//If else must be INSIDE loop.
// function addPhraseToDisplay(arr) {
//     let displayPhrase = '';
//     for (let i = 0; i < arr.length; i++){
//         let li = document.createElement('li');
//         let ul = document.querySelector('#phrase ul');
//         li += `${arr[i]}`;
//         ul.appendChild(li);
//     }
// }

    // document.querySelector('#phrase ul').innerHTML = displayPhrase;
    // return displayPhrase;

//addPhraseToDisplay(phraseArray);
//console.log(addPhraseToDisplay(phraseArray));

//function checkLetter(button) {

//}
//To check if class is changing
//console.log(document.getElementsByTagName('li').className);

// function addPhraseToDisplay(arr) {
//     let displayPhrase = '';
//     for (let i = 0; i < arr.length; i++){
//         displayPhrase += `<li> ${arr[i]} </li>`;
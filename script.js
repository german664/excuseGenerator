let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

let excuses = [who, action, what, when]

let getExcuse = (excusas) => {

    let sentence = [];

    for (let i = 0; i < excusas.length; i++) {

        let random = Math.floor(Math.random() * excusas[i].length);
        sentence.push(excusas[i][random]);
    }
    let finalSentence = sentence.join(' ')
    return finalSentence;
}

function generarExcusa() {
    document.querySelector('#boton').innerHTML = '<p class="excusa">' + getExcuse(excuses) + '</p>';
}

document.querySelector('#boton').addEventListener('click', generarExcusa);
document.querySelector('#boton').addEventListener('click', function () {
    document.querySelector('#boton').style.background = '#fa3e4e';
});
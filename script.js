window.onload = recuperaStorage;

let counter = 0;
let number = document.querySelector('#number');
let counterStorage = null;

let changeThemeClicked = false;
let btnChange = document.querySelector('#changeTheme');
let background = document.querySelector('body');
let btnReset = document.querySelector('#btnReset');
let title = document.querySelector('#title');
let footer = document.querySelector('footer');
let footerImg = document.querySelector('footer img');


function incremento() {
    counter++;
    numberColor();
    persistenciaGrava();
    number.innerHTML = counter;
}

function decremento() {
    counter--;
    numberColor();
    persistenciaGrava();
    number.innerHTML = counter;
}

function reset() {
    counter = 0;
    numberColor();
    persistenciaGrava();
    number.innerHTML = counter;
}

function numberColor() {

    if (counter == 0) {

        if (!changeThemeClicked) {
            number.style.color = 'white';
        } else {
            number.style.color = 'black';
        }
        return;
    }
    if (counter < 0) {
        number.style.color = 'red';
    }
    if (counter > 0) {
        number.style.color = 'rgb(0, 189, 0)';
    }
}

function persistenciaGrava() {
    localStorage.setItem('counter', JSON.stringify(counter));
}

function recuperaStorage() {
    counter = Number(localStorage.getItem('counter'));
    numberColor();
    number.innerHTML = counter;
}

function changeTheme() {

    if (!changeThemeClicked) {

        btnChange.style.justifyContent = 'flex-end'
        background.style.backgroundColor = 'white';
        btnReset.style.backgroundColor = 'rgb(85, 85, 85)';
        btnReset.style.borderColor = 'rgb(26, 26, 26)';
        btnReset.style.color = 'white';
        title.style.color = 'black';
        number.style.color = 'black';
        footer.style.color = 'black';
        footerImg.src = './icons/GitHub-Mark-32px.png'

        changeThemeClicked = true;
        numberColor()

    } else {
        btnChange.style.justifyContent = 'flex-start'
        background.style.backgroundColor = 'rgb(17, 17, 17)';
        btnReset.style.backgroundColor = '#EFEFEF';
        btnReset.style.borderColor = '#555555';
        btnReset.style.color = 'black';
        title.style.color = 'white';
        number.style.color = 'white';
        footer.style.color = 'white';
        footerImg.src = './icons/GitHub-Mark-Light-32px.png'


        changeThemeClicked = false;
        numberColor()
    }
}
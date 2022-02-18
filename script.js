window.onload = recuperaStorage;

let counter = 0;
let number = document.querySelector('#number');
let counterStorage = null;

let changeThemeClicked = false;
let themeLigthMode = false;

let btnChange = document.querySelector('#changeTheme');
let background = document.querySelector('body');
let btnReset = document.querySelector('#btnReset');
let title = document.querySelector('#title');
let footer = document.querySelector('footer');
let footerImg = document.querySelector('footer img');

let dadosStorage = {}
let dadosTemp = null;

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

    dadosStorage = {
        counter: counter,
        themeLigthMode: themeLigthMode,
    }

    localStorage.setItem('dados', JSON.stringify(dadosStorage));
}

function recuperaStorage() {

    dadosTemp = JSON.parse(localStorage.getItem('dados'));
    if (dadosTemp) {
        counter = dadosTemp.counter;
        numberColor();
        number.innerHTML = dadosTemp.counter;
        console.log(dadosTemp)

        if(dadosTemp.themeLigthMode){
            themeLight();
        }
    }
}

function changeTheme() {

    if (!changeThemeClicked) {
        themeLight();

    } else {
        themeDark();
    }
}

function themeLight() {
    btnChange.style.justifyContent = 'flex-end'
    background.style.backgroundColor = 'white';
    btnReset.style.backgroundColor = 'rgb(85, 85, 85)';
    btnReset.style.borderColor = 'rgb(26, 26, 26)';
    btnReset.style.color = 'white';
    title.style.color = 'black';
    number.style.color = 'black';
    footer.style.color = 'black';
    footerImg.src = './icons/GitHub-Mark-32px.png';

    changeThemeClicked = true;
    themeLigthMode = true;
    numberColor()
    persistenciaGrava()
}

function themeDark() {
    btnChange.style.justifyContent = 'flex-start'
    background.style.backgroundColor = 'rgb(17, 17, 17)';
    btnReset.style.backgroundColor = '#EFEFEF';
    btnReset.style.borderColor = '#555555';
    btnReset.style.color = 'black';
    title.style.color = 'white';
    number.style.color = 'white';
    footer.style.color = 'white';
    footerImg.src = './icons/GitHub-Mark-Light-32px.png';

    changeThemeClicked = false;
    themeLigthMode = false;
    numberColor()
    persistenciaGrava()
}
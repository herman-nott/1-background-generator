let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("body");
let button = document.querySelector("button");

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;

    css.textContent = `${body.style.background};`;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function setRandomColor_1() {
    let firstColor1 = getRandomInt(256);
    let secondColor1 = getRandomInt(256);
    let thirdColor1 = getRandomInt(256);

    let firstColor2 = getRandomInt(256);
    let secondColor2 = getRandomInt(256);
    let thirdColor2 = getRandomInt(256);

    body.style.background = `linear-gradient(to right, rgb(${firstColor1}, ${secondColor1}, ${thirdColor1}) , 
                            rgb(${firstColor2}, ${secondColor2}, ${thirdColor2}))`;
}

function setRandomColor_2() {
    let color1 = '#';
    let color2 = '#';

    let letters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];

    for (let i = 0; i < 6; i++) {
        color1 += letters[Math.floor(Math.random() * letters.length)];
        color2 += letters[Math.floor(Math.random() * letters.length)];
    }

    body.style.background = `linear-gradient(to right, ${color1} , ${color2})`;

    css.textContent = `${body.style.background};`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

button.addEventListener("click", function() {
    // setRandomColor_1();
    setRandomColor_2();

    css.textContent = `${body.style.background};`;
});
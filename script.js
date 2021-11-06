const redButton=document.querySelector("#red_color");
const red=document.querySelector(".color_red");

const pinkButton=document.getElementById("pink_color");
const pink=document.querySelector(".color_pink");

const greenButton=document.getElementById("green_color");
const green=document.querySelector(".color_green");

const whiteButton=document.getElementById("white_color");
const white=document.querySelector(".color_white");

const dotsButton = document.querySelector("#dots_button");
const dots=document.querySelector(".dots");

const stripesButton = document.querySelector("#stripes_button");
const stripes=document.querySelector(".stripes");

document.querySelector("#red_color").addEventListener('click', e => {
    if(red.style.display === 'block') {
        red.setAttribute("style", "display:none");
    } else {
        red.setAttribute("style", "display:block");
    }
});

document.querySelector("#pink_color").addEventListener('click', e => {
    if(pink.style.display === 'block') {
        pink.setAttribute("style", "display:none");
    } else {
        pink.setAttribute("style", "display:block");
    }
});

document.querySelector("#green_color").addEventListener('click', e => {
    if(green.style.display === 'block') {
        green.setAttribute("style", "display:none");
    } else {
        green.setAttribute("style", "display:block");
    }
});

document.querySelector("#white_color").addEventListener('click', e => {
    if(white.style.display === 'block') {
        white.setAttribute("style", "display:none");
    } else {
        white.setAttribute("style", "display:block");
    }
});

document.querySelector("#dots_button").addEventListener('click', e => {
    if(dots.style.display === 'block') {
        dots.setAttribute("style", "display:none");
    } else {
        dots.setAttribute("style", "display:block");
    }
});

document.querySelector("#stripes_button").addEventListener('click', e => {
    if(stripes.style.display === 'block') {
        stripes.setAttribute("style", "display:none");
    } else {
        stripes.setAttribute("style", "display:block");
    }
});


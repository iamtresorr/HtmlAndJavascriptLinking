"use strict";

const greeting = document.getElementById("greeting");


const nameTextbox = document.getElementById("nameTextbox");


const pressMeButton = document.getElementById("pressMeButton");


function init(){
    pressMeButton.onclick = onPressMeButtonClicked;
}

window.onload = init;

function onPressMeButtonClicked(){
    
    let name = nameTextbox.value;
    greeting.innerHTML = `Hello ${name}. how's it going?`;
}


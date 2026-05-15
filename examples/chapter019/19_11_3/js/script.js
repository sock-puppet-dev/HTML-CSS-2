"use strict";

let id = document.querySelector('.my-p');
if (id) {
    id.addEventListener("mousedown", getMouseP, true);
} else {
    alert("Keine Element mit id=myId gefunden!");
}

function getMouseP() {
    alert("Mouse button was pressed in p!");
}

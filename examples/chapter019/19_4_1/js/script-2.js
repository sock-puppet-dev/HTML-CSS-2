"use strict";

let elem = document.querySelector('#msg');
if (elem) {
    let text = elem.innerHTML;
    text += " " + "has been extended!";
    elem.innerHTML = text;
} else {
    console.log("Element with ID msg was not found!");
}
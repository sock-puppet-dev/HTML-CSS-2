"use strict";

document.querySelector('form').addEventListener(
    'submit', checkInput);
document.querySelector('form').addEventListener(
    'reset', checkReset);

function checkInput() {
    let x = confirm("Are you sure you want to submit the data?");
    if (x) {
        /* Submit data */
    } else {
        /* Do not submit */
        event.preventDefault();
    }
}

function checkReset(event) {
    let x = confirm("Do you want to reset the fields?");
    if (x) {
        /* Reset */
        document.querySelector('p').innerHTML = "Fields reset";
    } else {
        /* Do not reset */
        event.preventDefault();
        document.querySelector('p').innerHTML = "Reset canceled";
    }
}

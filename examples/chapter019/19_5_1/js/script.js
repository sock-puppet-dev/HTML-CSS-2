"use strict";

function changeContent() {
    document.querySelector('h1').innerHTML = "New Heading!";
    let elem = document.querySelector('p');
    elem.innerHTML = "New content for the paragraph text";
}

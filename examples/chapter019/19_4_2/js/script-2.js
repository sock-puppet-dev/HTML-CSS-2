"use strict";

let plainText = "";
let pElements = document.getElementsByTagName('p');
for (let i = 0; i < pElements.length; i++) {
    plainText += pElements[i].innerHTML + '\n';
}
console.log(plainText); // Output for demonstration

let htmlText = "p elements in document: " + pElements.length + "<br>";
let articlePElements = document.querySelectorAll('#lead p');
if (articlePElements) {
    htmlText += "Of which contained in the article element: " + articlePElements.length + "<br>";
}

htmlText += "The second paragraph in the article is: " + articlePElements[1].innerHTML;

document.querySelector('output').innerHTML = htmlText;
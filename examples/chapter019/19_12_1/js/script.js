"use strict";

document.querySelector('#new-p').onclick = function() {
    let pNew = document.createElement("p");
    let tNew = document.createTextNode("A new paragraph");
    pNew.appendChild(tNew); // <p>A new paragraph</p>.

    document.querySelector('.article-01').appendChild(pNew);
}

"use strict";

let counter = 0;
document.querySelector('#replace').onclick = function() {
    let hNew = document.createElement("h1");
    let tNew = document.createTextNode("Article " + ++counter + ": New heading");
    hNew.appendChild(tNew); // <p>A new paragraph</p>.

    let root = document.querySelector('.article-01');
    if (root) {
        let traverse = root.childNodes;
        for (let i = 0; i < traverse.length; i++) {
            if (traverse[i].nodeName.toUpperCase() === "H1") {
                root.replaceChild(hNew, traverse[i]); 
                break; // end loop
            }
        }
    }
}

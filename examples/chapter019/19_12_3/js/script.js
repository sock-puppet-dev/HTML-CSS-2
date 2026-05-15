"use strict";

document.querySelector('#add').onclick = function() {
    let pNew = document.createElement("p");
    let tNew = document.createTextNode("A new paragraph");
    pNew.appendChild(tNew);

    let root = document.querySelector('.article-01');
    if (root) {
        let traverse = root.childNodes;
        for (let i = 0; i < traverse.length; i++) {
            if (traverse[i].nodeName.toUpperCase() === "H1") {
                root.insertBefore(pNew, traverse[i].nextSibling);
                break; // end loop
            }
        }
    }
}

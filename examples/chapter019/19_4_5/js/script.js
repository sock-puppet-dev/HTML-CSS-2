"use strict";

let elem = document.querySelectorAll('article:nth-child(odd)');
for (let i = 0; i < elem.length; i++) {
  elem[i].style.backgroundColor = "wheat";
}

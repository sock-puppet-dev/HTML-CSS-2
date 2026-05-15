"use strict";

function getMouse() {
    var text = "Mouse button was pressed!"
    var pos = document.querySelector('output');
    if (pos) {
      pos.innerHTML = text;
      pos.style.background = "lightgray";
    }
  }

"use script";

function getMouseP(ev) {
    alert("Mouse button was pressed in p!");
    if (ev.stopPropagation) {
        ev.stopPropagation();
    }
}

function getMouseArticle() {
    alert("Mouse button was pressed in article!");
}

function showPos(ev) {
    let x = ev.clientX;
    let y = ev.clientY;
    let text = "Pos-X: " + x + " / Pos-Y: " + y;
    if (ev.shiftKey == true) {
        text += " / (Shift) key was pressed!";
    } else {
        text += " / (Shift) key was not pressed!";
    }
    text += " -> Mouse button: " + ev.button;
    document.querySelector('output').innerHTML = text;
    console.log(ev);
}

function keyPressed(ev) {
    let text = "Key code: " + ev.keyCode + "=" + String.fromCharCode(ev.keyCode);
    document.querySelector('output').innerHTML = text;
}

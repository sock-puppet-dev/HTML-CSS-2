"use script";

document.querySelector('#chapter').onchange = function() {
    let txt = "<b>Your selection:</b> " + this.value;
    // Check saved value of text field in txt 
    document.querySelector('p').innerHTML = txt;
};

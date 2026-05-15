"use script";

document.querySelector('#lname').onblur = function() {
    let txt = "<b>Your input:</b> " + this.value;
    // Check saved value of text field in txt
    document.querySelector('p').innerHTML = txt;
};

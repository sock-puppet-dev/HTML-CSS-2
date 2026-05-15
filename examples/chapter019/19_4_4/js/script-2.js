"use strict";

function getColor() {
    let colors = document.querySelectorAll('[name="color"]');
    let htmlText = "Colors to choose from : " + colors.length +
        "<br>You have chosen :";
    if (colors[0].checked) {
        htmlText += "Red";
    } else if (colors[1].checked) {
        htmlText += "Blue";
    } else {
        htmlText += "None";
    }
    document.querySelector('output').innerHTML = htmlText;
}
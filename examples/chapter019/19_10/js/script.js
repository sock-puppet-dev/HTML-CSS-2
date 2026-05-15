"use strict";

document.querySelector('.einLink').onclick = function(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    // Write the actual JavaScript code here, which states 
    // what is supposed to happen when the link gets clicked on
    console.log("Default action prevented");
}

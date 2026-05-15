"use strict";

let xmlhttp = new XMLHttpRequest();
let url = "json/data.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        let myArr = JSON.parse(xmlhttp.responseText);
        makeOutput(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function makeOutput(arr) {
    let out = '<ul>';
    for (let i = 0; i < arr.length; i++) {
        out += '<li>' + '<a href="' + arr[i].url + '">' +
            arr[i].city + '</a>' + " = " + arr[i].zipCode + '</li>';
    }
    out += '</ul>';
    document.querySelector('#output').innerHTML = out;
}

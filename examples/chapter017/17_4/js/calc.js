"use strict";

document.addEventListener('DOMContentLoaded', function() {
    let button1 = document.getElementById('button-calculate-sum');
    button1.addEventListener('click', calculateSum);
    let button2 = document.getElementById('button-calculate-mul');
    button2.addEventListener('click', calculateMul);
});

function calculateSum() {
    let x = parseInt(document.getElementById('field1').value);
    let y = parseInt(document.getElementById('field2').value);
    let result = x + y;
    showResult(result);
}

function calculateMul() {
    let x = parseInt(document.getElementById('field1').value);
    let y = parseInt(document.getElementById('field2').value);
    let result = x * y;
    showResult(result);
}

function showResult(result) {
    let resultField = document.getElementById('result');
    resultField.value = result;
    console.log(result);
}
"use strict";

document.addEventListener('DOMContentLoaded', addData);

function addData() {
    let data = [
        ['12:00', 'Montag', 'Fotografie-Workshop in München'],
        ['19:00', 'Montag', 'Abendessen mit Kunde X'],
        ['09:00', 'Dienstag', 'Besprechung mit Y'],
        ['12:00', 'Dienstag', 'Mittagessen mit Y im Ritz'],
        ['15:00', 'Mittwoch', 'Selbstentwicklung (Seminar)']
    ];

    let t = document.querySelector('#template-row');
    td = t.content.querySelectorAll('td');

    data.forEach(function(dataRow) {
        td[0].textContent = dataRow[0];
        td[1].textContent = dataRow[1];
        td[2].textContent = dataRow[2];

        let tb = document.querySelector('tbody');
        let clone = document.importNode(t.content, true);
        tb.appendChild(clone);

    });
}
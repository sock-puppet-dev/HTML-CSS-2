"use strict";

let directory = [
  { "city":"Portland", "zipCode":97217 },
  { "city":"San Francisco", "zipCode":94104 },
  { "city":"Philadelphia", "zipCode":19099 }
];

document.querySelector('#output').innerHTML = "<ul>" +
  "<li>" + directory[0].city + " = " + directory[0].zipCode + "</li>" +
  "<li>" + directory[1].city + " = " + directory[1].zipCode + "</li>" +
  "<li>" + directory[2].city + " = " + directory[2].zipCode + 
  "</li></ul>";


/*var txt = "<ul>";  
for(var i = 0; i<directory.length; i++) {
  txt += "<li>" + directory[i].ort + " = " + directory[i].postleitzahl + "</li>";
}
txt += "</ul>";
document.querySelector('#output').innerHTML = txt;*/
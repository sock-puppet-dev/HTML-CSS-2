"use strict";

let root = document.querySelector('.article-01');
if ( root ) {
  let traverse = root.childNodes;
  let text = "The following element nodes are " 
           + root.nodeName  + " contained in:" + "<ul>";
  for (let i=0; i<traverse.length; i++) {
    if (traverse[i].firstChild !== null ) {
      text += "<li>" + "<b>Node name</b>: " + traverse[i].nodeName + "; " 
           + "<b>Content</b>: " + traverse[i].firstChild.nodeValue + "</li>";
    }
  }
  text += "</ul>" + "Parent node: " + root.parentNode.nodeName;
  document.querySelector('#result').innerHTML = text; 
}
else {
  alert("No child nodes available!!!");
}

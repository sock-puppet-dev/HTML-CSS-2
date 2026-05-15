function showConfirm() {
    confirm('Please confirm the operation!');
}

function showPrompt() {
    var ergebnistext = prompt("What is your name?", "");
    if (ergebnistext == "" || ergebnistext == null)
        history.back();
    else
        alert("Hello, " + ergebnistext);
}

showConfirm();
showPrompt();
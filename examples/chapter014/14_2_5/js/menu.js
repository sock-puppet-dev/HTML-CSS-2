$(document).ready(function() {
    $(".menubutton").click(function() { // trigger
        $(this).next(".ul-list").slideToggle("fast"); // blendet beim Klick auf "dt" die nächste "dd" ein.
        $(this).children("a").toggleClass("closed open"); // wechselt beim Klick auf "dt" die Klasse des enthaltenen a-Tags von "closed" zu "open".
    });
});
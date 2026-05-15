// Evaluate radio buttons
let roomType = document.querySelectorAll('input[name="room"]');
for (let i = 0; i < roomType.length; i++) {
    roomType[i].onclick = function() {
        let txt = "<b>Selected for room : </b>" + this.value;
        document.querySelector('.output').innerHTML = txt;
    }
}

// Evaluate checkboxes
let formPack = document.querySelectorAll('input[name="extra"]');
for (let i = 0; i < formPack.length; i++) {
    formPack[i].onclick = function() {
        let msg = "<b>Selected : </b>";
        for (let j = 0; j < formPack.length; j++) {
            if (formPack[j].checked) {
                msg += formPack[j].value + " ";
            }
        }
        document.querySelector('.output').innerHTML = msg;
    }
}

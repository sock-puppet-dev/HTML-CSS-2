let xchange = true;

function changePicture() {
    let current = document.querySelector('.pic');

    if (xchange) {
        current.src = "images/image-02.png";
        current.old = "JavaScript Handbook";
        xchange = false;
    } else {
        current.src = "images/image-01.png";
        current.old = "HTML Handbook";
        xchange = true;
    }
}

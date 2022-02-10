let current_slide = 1;
let slides = document.getElementsByClassName("slide");
let last_slide = slides.length;
for (var i = 0; i < slides.length; i++) {
    slides.item(i).setAttribute('data-page', (i+1));
}

function set_slide() {
    let slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
        if (slides.item(i).dataset.page == current_slide) {
            window.scrollTo(0, slides.item(i).offsetTop);
            break;
        }
    }
}

function change_mode() {
    document.getElementById("change-mode").classList.toggle("pressed");
    document.body.classList.toggle("presentation");
    current_slide = Math.round(window.pageYOffset / window.innerHeight) + 1;
    set_slide();
}

function checkKey(e) {
    if (event.keyCode === 39 && current_slide < last_slide) {
        current_slide += 1;
    } else if (event.keyCode === 37 && current_slide > 1) {
        current_slide -= 1;
        let slides = document.getElementsByClassName("slide");
    }
    set_slide();
}

function checkScroll(e) {
    document.getElementById("current-slide").innerText = Math.round(window.pageYOffset / window.innerHeight) + 1;
}

document.onkeyup = checkKey;
document.onscroll = checkScroll;

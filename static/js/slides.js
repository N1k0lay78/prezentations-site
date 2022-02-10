let current_slide = 1;
let isOnPresentationMode = true;
let slides = document.getElementsByClassName("slide");
let last_slide = slides.length;
let deltaScroll = 0;
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
    isOnPresentationMode = !isOnPresentationMode;
    document.getElementById("change-mode").classList.toggle("pressed");
    document.body.classList.toggle("presentation");
    current_slide = Math.round(window.pageYOffset / window.innerHeight) + 1;
    set_slide();
}

function onKey(e) {
    if ((event.keyCode === 39 || event.keyCode === 40) && current_slide < last_slide) {
        current_slide += 1;
    } else if ((event.keyCode === 37 || event.keyCode === 38) && current_slide > 1) {
        current_slide -= 1;
    }
    set_slide();
}

function onScroll(e) {
    document.getElementById("current-slide").innerText = Math.round(window.pageYOffset / window.innerHeight) + 1;
}

function onWheel(e) {
    if (isOnPresentationMode) {
        if (event.deltaY > 0 && deltaScroll < 0) {
            deltaScroll = 0;
        } else if (event.deltaY < 0 && deltaScroll > 0) {
            deltaScroll = 0;
        }
        deltaScroll += event.deltaY * 0.01;
        if (deltaScroll > 3  && current_slide < last_slide) {
            deltaScroll = 0;
            current_slide += 1;
        } else if (deltaScroll < -3  && current_slide > 1) {
            deltaScroll = 0;
            current_slide -= 1;
        }
        set_slide();
    }
}

document.onkeyup = onKey;
document.onscroll = onScroll;
document.onwheel = onWheel;

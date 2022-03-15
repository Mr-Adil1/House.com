var ul = document.getElementsByTagName("ul")[0];
var menu = document.getElementById("menu");

function menuFunction() {
    menu.classList.toggle("bx-x");
    ul.classList.toggle("down")
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    ul.classList.remove("down")
}


/*
var readmore = document.getElementById("readmore");
var paragraph = document.getElementsByClassName("paragraph");

function readFunction() {
    paragraph.classList.toggle("overflow");
}*/
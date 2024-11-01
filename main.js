let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox .addEventListener("click", () => {
    navbar.classList.toggle("showInput");

    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
});

// sidebar  open close 
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", ()=> {
    navLinks.style.left = "0";

});
menuCloseBtn.addEventListener("click", ()=> {
    navLinks.style.left = "-100%";
});

// sidebar sub menu open close 

let htmlArrow = document.querySelector(".html-arrow");
htmlArrow.addEventListener("click", ()=> {
    navLinks.classList.toggle("show1");
});
let moreArrow = document.querySelector(".more-arrow");
moreArrow.addEventListener("click", ()=> {
    navLinks.classList.toggle("show2");
});
let jsArrow = document.querySelector(".js-arrow");
jsArrow.addEventListener("click", ()=> {
    navLinks.classList.toggle("show3");
});


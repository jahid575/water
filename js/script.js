$('.header-water').ripples({
    dropRadius: 20,
    perturbance: 0.04,
});

window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.rotate');
    scroll.classList.toggle("active", window.scrollY > 500)
});

function toggle() {
    var trailer = document.querySelector(".trailer");
    var video = document.querySelector(".video");
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}

AOS.init();

window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.rotate');
    scroll.classList.toggle("active", window.scrollY > 500)
});

window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}

var menuBtn = document.getElementById("menu-open");
var sideNav = document.getElementById("menu");

sideNav.style.left = "-300px";
menuBtn.onclick = function () {
    if (sideNav.style.left == "-300px") {
        sideNav.style.left = "0";
    } else {
        sideNav.style.left = "-300px";
    }
}
//  MadeWith**JMS**(Jahid Hasan)
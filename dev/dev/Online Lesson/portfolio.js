/* HEADER */
window.onload = function() {scrollfunction()};
window.onscroll = function() {scrollfunction()};

function scrollfunction() {
    var header = document.getElementById('header');

    if(document.documentElement.scrollTop > 70) {
        if(!header.classList.contains('navber-fixde')) {
            header.classList.add('navber-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '70px';
            header.style.display = 'none';
            setTimeout(function(){
                header.style.display = 'block';
            }, 40);
        }
    } else {
        if(header.classList.contains('navber-fixed')) {
            header.classList.remove('navber-fixde');
            document.getElementsByTagName('body')[0].style.marginTop = '0';
        }
    }
}

function menuToggle() {
    document.getElementById('menu').classList.toggle('show');
}

document.getElementById('toggleBtn').addEventListener('click', menuToggle);

/* WELCOME AREA */
var imageslideIndex = 1;

function showImageSlides(n) {
    var i;
    var slides = document.getElementsByClassName('image-slide');
    var dots = document.getElementsByClassName('dot');
    if(n > slides.length) { imageslideIndex = 1 }
    if(n < 1) { imageslideIndex = slides.length}
}
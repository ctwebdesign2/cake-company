var slideIndex = 1;
var z = document.getElementsByClassName("slideshow-container");

for (i = 0; i < z.length; i++) {
    //set custom data attribute to first current image index
    z[i].setAttribute("data-currentslide", 1);
    showSlides(z[i].getAttribute("data-currentslide"), i);
}

function plusSlides(n, j) {
    //get custom data attribute value of current image index to slideshow-container class index j
    slideIndex = parseInt(z[j].getAttribute("data-currentslide")[0]);
    showSlides(slideIndex += n, j);
}

function currentSlide(n, j) {
    showSlides(slideIndex = n, j);
}

function showSlides(n, j) {
    var i;
    var z = document.getElementsByClassName("slideshow-container")[j];
    var x = z.getElementsByClassName("mySlides");
    var dots = z.getElementsByClassName("dot");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    //set custom data attribute to current image index
    z.setAttribute("data-currentslide", slideIndex);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activeDot";
}
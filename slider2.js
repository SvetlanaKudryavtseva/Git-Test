console.log("1");
/* Setting the default slide start index */
let slideIndex = 1;
/* Call the function that is implemented below */
showSlides(slideIndex);
/* Increase index by 1 - show the next slide */
function nextSlide() {
    showSlides(slideIndex += 1)
}
/* Decrease index by 1 - show the previous slide */
function previousSlide() {
    showSlides(slideIndex -= 1)
}
/* Set the current slide */
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/* Flip function */
function showSlides(n) {
    /* We refer to the elements with the class name "slider2__item", that is, to the pictures */
    let slides = document.querySelectorAll('slider2__img');
    /* Checking the number of slides */
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    /* Loop through each slide in a for loop*/
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Making an element block*/
    slides[slideIndex - 1].style.display = "block";
}
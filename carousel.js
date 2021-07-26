let sliderImages = document.querySelectorAll('.headSlides');
let arrowLeft = document.querySelector('.previous');
let arrowRight = document.querySelector('.next');
let current = 0; 

function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function startSlides() {
    reset();
    sliderImages[0].style.display = 'block';
}

/*LEFT ARROW */
function slideLeft() {
    reset(); 
    sliderImages[current - 1].style.display = 'block';
    current--; 
}

arrowLeft.addEventListener('click', () => {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
})

/*RIGHT ARROW */

function slideRight() {
    reset(); 
    sliderImages[current + 1].style.display = 'block'; 
    current++; 
}

arrowRight.addEventListener('click', () => {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
})

startSlides();
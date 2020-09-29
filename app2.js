const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    console.log('1122');
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    // setTimeout(() => current.classList.remove('.current');)
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }
    // setTimeout(() => current.classList.remove('.current');)
}

next.addEventListener('click', () => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', () => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// auto slide
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
const sliderContainer = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__slide');
const totalSlides = Math.min(slides.length, 3);
let currentIndex = 0;
function goToSlide(index) {
    if (index < 0 || index >= totalSlides) {
        return;
    }

    const slideWidth = slides[0].offsetWidth;
    const offset = -slideWidth * index;

    sliderContainer.style.transform = `translateX(${offset}px)`;

    // Добавить класс show к текущей карточке
    slides[currentIndex].classList.remove('show');
    slides[index].classList.add('show');

    currentIndex = index;
}
function goToNextSlide() {
    slides.forEach(function (slide) {
        slide.classList.remove('show');
    });
    const nextIndex = (currentIndex + 1) % totalSlides;
    goToSlide(nextIndex);
}
function goToPreviousSlide() {
    slides.forEach(function (slide) {
        slide.classList.remove('show');
    });
    const previousIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(previousIndex);
}
const nextButton = document.querySelector('.next-button');
const previousButton = document.querySelector('.previous-button');
nextButton.addEventListener('click', function () {
    // Удалить класс show из всех карточек
    slides.forEach(function (slide) {
        slide.classList.remove('show');
    });
    goToNextSlide();
});
previousButton.addEventListener('click', function () {
    // Удалить класс show из всех карточек
    slides.forEach(function (slide) {
        slide.classList.remove('show');
    });
    goToPreviousSlide();
});
previousButton.addEventListener('click', goToPreviousSlide);
sliderContainer.classList.add('slide-animation');

///

const fourthSliderContainer = document.querySelector('.fourth-slider');
const fourthSlides = document.querySelectorAll('.fourth-slider__slide');
const fourthTotalSlides = Math.min(slides.length, 3);
let fourthCurrentIndex = 0;
function goToFourthSlide(index) {
    if (index < 0 || index >= fourthTotalSlides) {
        return;
    }

    const slideWidth = fourthSlides[0].offsetWidth;
    const offset = -slideWidth * index;

    fourthSliderContainer.style.transform = `translateX(${offset}px)`;

    fourthSlides[fourthCurrentIndex].classList.remove('show');
    fourthSlides[index].classList.add('show');

    fourthCurrentIndex = index;
}
function goToFourthNextSlide() {
    fourthSlides.forEach(function (slide) {
        slide.classList.remove('show');
    });
    const nextIndex = (fourthCurrentIndex + 1) % fourthTotalSlides;
    goToFourthSlide(nextIndex);
}
function goToFourthPreviousSlide() {
    fourthSlides.forEach(function (slide) {
        slide.classList.remove('show');
    });
    const previousIndex = (fourthCurrentIndex - 1 + fourthTotalSlides) % fourthTotalSlides;
    goToFourthSlide(previousIndex);
}
const fourthNextButton = document.querySelector('.fourth-slider-controls__next-button');
const fourthPreviousButton = document.querySelector('.fourth-slider-controls__previous-button');
fourthNextButton.addEventListener('click', goToFourthNextSlide);
fourthPreviousButton.addEventListener('click', goToFourthPreviousSlide);
fourthSliderContainer.classList.add('slide-animation');

//

const fifthSliderContainer = document.querySelector('.fifth-slider');
const fifthSlides = document.querySelectorAll('.fifth-slider__slide');
const fifthTotalSlides = Math.min(slides.length, 3);
let fifthCurrentIndex = 0;

function goToFifthSlide(index) {
    if (index < 0 || index >= fifthTotalSlides) {
        return;
    }

    const slideWidth = fifthSlides[0].offsetWidth;
    const offset = -slideWidth * index;

    fifthSliderContainer.style.transform = `translateX(${offset}px)`;

    fifthSlides[fifthCurrentIndex].classList.remove('show');
    fifthSlides[index].classList.add('show');

    fifthCurrentIndex = index;
}

function goToFifthNextSlide() {
    fifthSlides.forEach(function (slide) {
        slide.classList.remove('show');
    });
    const nextIndex = (fifthCurrentIndex + 1) % fifthTotalSlides;
    goToFifthSlide(nextIndex);
}

function goToFifthPreviousSlide() {
    fifthSlides.forEach(function (slide) {
        slide.classList.remove('show');
    });
    const previousIndex = (fifthCurrentIndex - 1 + fifthTotalSlides) % fifthTotalSlides;
    goToFifthSlide(previousIndex);
}

const fifthNextButton = document.querySelector('.fifth-slider-controls__next-button');
const fifthPreviousButton = document.querySelector('.fifth-slider-controls__previous-button');

fifthNextButton.addEventListener('click', goToFifthNextSlide);
fifthPreviousButton.addEventListener('click', goToFifthPreviousSlide);

fifthSliderContainer.classList.add('slide-animation');

///

const seventhSliderContainer = document.querySelector('.seventh-slider');
const seventhSlides = document.querySelectorAll('.seventh-slider__slide');
const seventhTotalSlides = Math.min(slides.length, 3);
let seventhCurrentIndex = 0;

function goToSeventhSlide(index) {
    if (index < 0 || index >= seventhTotalSlides) {
        return;
    }

    const slideWidth = seventhSlides[0].offsetWidth;
    const offset = -slideWidth * index;

    seventhSliderContainer.style.transform = `translateX(${offset}px)`;

    seventhSlides[seventhCurrentIndex].classList.remove('show');
    seventhSlides[index].classList.add('show');

    seventhCurrentIndex = index;
}

function goToSeventhNextSlide() {
    seventhSlides.forEach(function (slide) {
        slide.classList.remove('show');
    });
    const nextIndex = (seventhCurrentIndex + 1) % seventhTotalSlides;
    goToSeventhSlide(nextIndex);
}

function goToSeventhPreviousSlide() {
    seventhSlides.forEach(function (slide) {
        slide.classList.remove('show');
    });
    const previousIndex = (seventhCurrentIndex - 1 + seventhTotalSlides) % seventhTotalSlides;
    goToSeventhSlide(previousIndex);
}

const seventhNextButton = document.querySelector('.seventh-slider-controls__next-button');
const seventhPreviousButton = document.querySelector('.seventh-slider-controls__previous-button');

seventhNextButton.addEventListener('click', goToSeventhNextSlide);
seventhPreviousButton.addEventListener('click', goToSeventhPreviousSlide);

seventhSliderContainer.classList.add('slide-animation');
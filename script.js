let caroussel = document.getElementById("caroussel-items");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

let currentIndex = 0;
const maxSlides = 3;

const updateSlide = () => {
    caroussel.style.transform = `translateX(-${currentIndex * 33.33}%)`
}

btnNext.addEventListener("click", (e) => {
    currentIndex = (currentIndex + 1) % maxSlides;
    updateSlide();
})

btnPrev.addEventListener("click", (e) => {
    currentIndex = (currentIndex - 1 + maxSlides) % maxSlides;
    updateSlide();
})

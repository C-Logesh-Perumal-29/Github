const slides = document.querySelectorAll('.image-slide');
let currentIndex = 0;

function changeImage() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(changeImage, 3000); // Change image every 5 seconds

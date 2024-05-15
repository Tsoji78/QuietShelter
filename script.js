const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");  
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

let currentSlide = 0;
const intervalTime = 7000; // Adjust this value to change the interval time (in milliseconds)

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    slideNav(currentSlide);
};

// Function to switch to the next slide at regular intervals
const startSlideShow = () => {
    setInterval(nextSlide, intervalTime);
};

var slideNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) =>{
        slide.classList.remove("active");
    });

    contents.forEach((content) =>{
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) =>{
    btn.addEventListener("click", () =>{
        slideNav(i);
        currentSlide = i;
    });
});

// Start the slideshow
startSlideShow();

// contact address scripting

// reveal scrolling
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(revealOnScroll, options);

    revealElements.forEach(element => {
        observer.observe(element);
    });
});


// script.js
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const themeToggle = document.getElementById('theme-toggle');

// Burger Menu Toggle
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Theme Switcher
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.style.backgroundColor = '#333';
        document.querySelector('.navbar').style.backgroundColor = '#111';
    } else {
        document.body.style.backgroundColor = '#f4f4f4';
        document.querySelector('.navbar').style.backgroundColor = '#000';
    }
});

// JavaScript to control slider movement
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let offset = 0;
const slideWidth = slides[0].offsetWidth + 20; // Slide width plus gap

// Function to move the slider
function moveSlider() {
    offset += slideWidth;
    if (offset >= slideWidth * slides.length) {
        offset = 0;
    }
    slider.style.transform = `translateX(-${offset}px)`;
}

// Automatically move the slider every 3 seconds
setInterval(moveSlider, 3000);


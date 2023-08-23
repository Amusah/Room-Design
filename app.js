const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.hamburger');
const close = document.querySelector('.close-btn');


// nav toggle functionality
const navToggler = () => {
    nav.classList.toggle('nav-open');
}
burger.addEventListener('click', navToggler);
close.addEventListener('click', navToggler);
const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.hamburger');
const close = document.querySelector('.close-btn');
const heroSlider = document.getElementById('hero');
const sliderButton = document.querySelectorAll('.btn');


// nav toggle functionality
const navToggler = () => {
    nav.classList.toggle('nav-open');
}
burger.addEventListener('click', navToggler);
close.addEventListener('click', navToggler);


const screens = {
        mobile: [
            '/images/mobile-image-hero-1.jpg',
            '/images/mobile-image-hero-2.jpg',
            '/images/mobile-image-hero-3.jpg'
        ],
        desktop: [
            '/images/desktop-image-hero-1.jpg',
            '/images/desktop-image-hero-2.jpg',
            '/images/desktop-image-hero-3.jpg'
        ]
    };

const changeImage = (num) => {
    const imgageSource = window.innerWidth < 500 ? screens.mobile[num] : screens.desktop[num];
    heroSlider.style.transition = '1s ease-out';
    heroSlider.style.backgroundImage = `url(${imgageSource})`;
}

let counter = 0;
sliderButton.forEach(btn => {
    btn.addEventListener('click', ({ target }) => {
        if(target.classList.contains('next-slide')){
            if(counter === 2){
                counter = 0;
                changeImage(counter);
            }else {
                counter++;
                changeImage(counter);
            }
            // console.log(counter)
        }

        if(target.classList.contains('prev-slide')){
            if(counter === 0){
                counter = 2;
                changeImage(counter);
            }else {
                counter--;
                changeImage(counter);
            }
            // console.log(counter)
        }
    })
});

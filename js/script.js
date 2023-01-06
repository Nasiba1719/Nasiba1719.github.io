

/** RESPONSIVE NAV MENU **/

const navMenu = () =>{
    const navbarToggler = document.querySelector('.navbar-toggler')
    const navList = document.querySelector('.nav-list')

    navbarToggler.addEventListener('click',() => {
        navList.classList.toggle('navbar-active')
        navbarToggler.classList.toggle('toggle')

    })
}
navMenu();


/**SCROLL REVEAL ANIMATIONS */
ScrollReveal().reveal('.ani-left', {
    origin:'left',
    distance:'10rem',
    duration: 1000,
    easing:'ease-in'

});

ScrollReveal().reveal('.ani-right', {
    origin:'right',
    distance:'10rem',
    duration: 1000,
    easing:'ease-in'

});

ScrollReveal().reveal('.ani-bottom', {
    origin:'bottom',
    distance:'10rem',
    duration: 1000,
    easing:'ease-in'

});

ScrollReveal().reveal('.ani-fade-up', {
    opacity:0,
    easing:'ease-in'

});

ScrollReveal().reveal('.ani-delay', {
    delay:500

});

ScrollReveal().reveal('.ani-delay2', {
    delay:1000

});



//CAROUSEL SLIDE 

const topSlider = document.getElementById("mainArea").querySelector(".slider");
const topSlides = topSlider.querySelectorAll(".slide");
const topSlideIcons = topSlider.querySelectorAll(".slide-icon");

const bottomSlider = document.getElementById("adam").querySelector('.adam-slider');
const bottomSlides = bottomSlider.querySelectorAll(".adam-slide");
const bottomSlideIcons = bottomSlider.querySelectorAll(".slide-icon");


topSlider.querySelector(".prev-btn").addEventListener("click", (event) => flipSlide(event, "prev", topSlider, topSlides, topSlideIcons));
topSlider.querySelector(".next-btn").addEventListener("click", (event) => flipSlide(event, "next", topSlider, topSlides, topSlideIcons));
topSlideIcons.forEach((item, index) => {
  item.addEventListener("click", (event) => flipSlide(event, index, topSlider, topSlides, topSlideIcons));
})

bottomSlider.querySelector(".prev-btn").addEventListener("click", (event) => flipSlide(event, "prev", bottomSlider, bottomSlides, bottomSlideIcons));
bottomSlider.querySelector(".next-btn").addEventListener("click", (event) => flipSlide(event, "next", bottomSlider, bottomSlides, bottomSlideIcons));
bottomSlideIcons.forEach((item, index) => {
  item.addEventListener("click", (event) => flipSlide(event, index, bottomSlider, bottomSlides, bottomSlideIcons));
})

function flipSlide(event, button = "next", slider = topSlider, slides = topSlides, slideIcons = null) {
    const numberOfSlides = slides.length;
    var slideNumber = 0;

    slides.forEach((slide, index) => {
        if (slide.classList.contains("active")) {
            slideNumber = index;
            console.log(slideNumber);
        }
        slide.classList.remove("active");
    });

    if (slideIcons) {
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });
    }

    if (button === "prev") {
        slideNumber--;
    } else if (button === "next") {
        slideNumber++;
    } else {
        slideNumber = button;
    }


    if (slideNumber < 0){
        slideNumber = numberOfSlides -1;
    }
    if (slideNumber > (numberOfSlides -1)){
        slideNumber = 0;
    }
    

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
}


























/**CAROUSEL SLIDE 
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;


// IMAGE SLIDER NEXT BUTTON
nextBtn.addEventListener("click", () =>{
   slides.forEach((slide) => {
     slide.classList.remove("active");
   });
   slideIcons.forEach((slideİcon) => {
    slideİcon.classList.remove("active");
  });

    slideNumber++;

    if (slideNumber > (numberOfSlides -1)){
    slideNumber = 0;
}
slides[slideNumber].classList.add("active");
slideIcons[slideNumber].classList.add("active");
});

// IMAGE SLIDER PREVIOUS BUTTON

prevBtn.addEventListener("click" , () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((slideİcon) => {
       slideİcon.classList.remove("active");
     });
   
       slideNumber--;
   
       if (slideNumber < 0){
       slideNumber = numberOfSlides -1;
   }
   slides[slideNumber].classList.add("active");
   slideIcons[slideNumber].classList.add("active");   
});**/


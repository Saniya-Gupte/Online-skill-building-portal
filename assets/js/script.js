'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);

// preview course
let preveiwContainer = document.querySelector(".course-preview");
let previewBox = preveiwContainer.querySelectorAll(".preview");

document.querySelectorAll(".course .course-card").forEach((course) => {
  course.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = course.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});


//Dark Mode

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("body-dark")
  document.getElementById("header").classList.toggle("header-dark");

  document.getElementById("navbar").classList.toggle("header-dark");

  if (checkbox.checked === true) {
    document.getElementById('logo-main').src = './assets/images/logo2.svg';
    document.getElementById('logo-nav').src = './assets/images/logo2.svg';
  } else {
    document.getElementById('logo-main').src = './assets/images/logo.svg';
    document.getElementById('logo-nav').src = './assets/images/logo.svg';
  }
  
  const elements = document.getElementsByClassName('turn-text-light');
  for (const element of elements) {
    element.classList.toggle('text-light');
  }

  const icon_badge = document.getElementsByClassName('turn-text-dark');
  for (const element of icon_badge) {
    element.classList.toggle('text-dark');
  }

  var home = document.getElementById('home');
  if (checkbox.checked === true) {
    home.style.backgroundImage = "url('./assets/images/hero-bg2.svg')";
  } else {
    home.style.backgroundImage = "url('./assets/images/hero-bg.svg')";
  }

  const category_card = document.getElementsByClassName('category-card');
  for (const element of category_card) {
    element.classList.toggle('card-dark');
  }

  const card_icon_badge = document.getElementsByClassName('icon-badge');
  for (const element of card_icon_badge) {
    element.classList.toggle('card-badge-icon-dark');
  }

  document.getElementById("courses").classList.toggle("wavy-dark");

  var wavy_bg = document.getElementById('wavy-bg');
  if (checkbox.checked === true) {
    wavy_bg.style.backgroundImage = "url('./assets/images/video-bg2.png')";
  } else {
    wavy_bg.style.backgroundImage = "url('./assets/images/video-bg.png')";
  }

  const coloured_part = document.getElementsByClassName('colored-part');
  for (const element of coloured_part) {
    element.classList.toggle('card-dark');
  }

  var wavy_bg = document.getElementById('blog');
  if (checkbox.checked === true) {
    wavy_bg.style.backgroundImage = "url('./assets/images/blog-bg2.svg')";
  } else {
    wavy_bg.style.backgroundImage = "url('./assets/images/blog-bg.svg')";
  }

  var wavy_bg = document.getElementById('contactus');
  if (checkbox.checked === true) {
    wavy_bg.style.backgroundImage = "url('./assets/images/blog-bg2.svg')";
  } else {
    wavy_bg.style.backgroundImage = "url('./assets/images/blog-bg.svg')";
  }

  const course_card = document.getElementsByClassName('course-card');
  for (const element of course_card) {
    element.classList.toggle('course-card-dark');
  }

  const preview = document.getElementsByClassName('preview');
  for (const element of preview) {
    element.classList.toggle('wavy-dark');
  }

  const grey = document.getElementsByClassName('turn-text-grey');
  for (const element of grey) {
    element.classList.toggle('wavy-dark');
  }

  const grey2 = document.getElementsByClassName('turn-text-grey2');
  for (const element of grey2) {
    element.classList.toggle('grey-dark');
  }

  const grey3 = document.getElementsByClassName('turn-text-grey3');
  for (const element of grey3) {
    element.classList.toggle('grey-dark2');
  }

  const buy = document.getElementsByClassName('cart');
  for (const element of buy) {
    element.classList.toggle('back-light');
  }

})

var swiper = new Swiper(".review-slider",{
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay:{
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
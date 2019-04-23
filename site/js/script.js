// menu button
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-item');
const main = document.querySelector('main');

let openMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle('close');
  menu.classList.toggle('open');
  menuList.classList.toggle('open');
  menuItems.forEach(item => item.classList.toggle('open'));
  main.classList.toggle('push-main');
  openMenu = !openMenu;
}

// form validation
function formValidation() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  const captcha = document.getElementById('captcha').value;
  const formMsg = document.getElementById('error-msg');

  if(name == '' || email == '' || phone == '' || message == '' || captcha == '') {
    formMsg.innerHTML = 'Ispunite sva polja';
    return false;
  } else if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email)) {
    formMsg.innerHTML = 'Pogrešan email format';
    return  false;
  } else if(!/^[0-9- +]*$/.test(phone)) {
    formMsg.innerHTML = 'Pogrešan format telefona';
    return false;
  } else if(!/11/.test(captcha)) {
    formMsg.innerHTML = `Ne, 3 + 8 nije ${captcha}`;
    return false;
  } else {
    formMsg.style.display = 'none';
  }
}

// error message
const submitBtn = document.getElementById('submit');
const errorMsg = document.getElementById('error-msg');
  // check if submit button exists on a current page
if(submitBtn) {
  submitBtn.addEventListener('click', () => errorMsg.classList.add('error-msg'));
}



// about page gallery
(() => {
  const slider = document.querySelector('.slider-items');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  // next slide
  const rightSlide = (e) => {
    e.preventDefault();

    let activeSlide = document.querySelector('.slide-active');  // active slide
    let nextSlide = activeSlide.nextElementSibling; // next slide

    if(nextSlide !==null) {
      // if not the last slide
      activeSlide.classList.remove('slide-active');
      activeSlide.classList.add('slide-hidden');
      nextSlide.classList.add('slide-active');
      nextSlide.classList.remove('slide-hidden');
    } else {
      // the last slide
      activeSlide.classList.remove('slide-active');
      activeSlide.classList.add('slide-hidden');
      slider.firstElementChild.classList.add('slide-active');
      slider.firstElementChild.classList.remove('slide-hidden');
    }
  };

  // previous slide
  const leftSlide = (e) => {
    e.preventDefault();
  
    let activeSlide = document.querySelector('.slide-active');  // active slide
    let previousSlide = activeSlide.previousElementSibling;  // previous slide
  
    if(previousSlide !== null) {
      // if not the first slide
      activeSlide.classList.remove('slide-active');
      activeSlide.classList.add('slide-hidden');
      previousSlide.classList.add('slide-active');
      previousSlide.classList.remove('slide-hidden');
    } else {
      // the first slide
      activeSlide.classList.remove('slide-active');
      activeSlide.classList.add('slide-hidden');
      slider.lastElementChild.classList.add('slide-active');
      slider.lastElementChild.classList.remove('slide-hidden');
    }
  };

  // arrow event listeners
  arrowRight.addEventListener('click', rightSlide, false);
  arrowLeft.addEventListener('click', leftSlide, false);

})();
'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////// selecting creating and deleting elements ///////

// console.log(document.documentElement);

///// Selecting Elements

/// querySelector
document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(allSections);

/// getElementBy
document.getElementById('.section--1');
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

/// getElementByClassName
document.getElementsByClassName('btn');

///// Creating and inserting elements
// .insertAdjacentHTML();

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for analytics and personalized content.';

const closeBtn = document.createElement('button');
closeBtn.classList.add('btn--close-cookie');
closeBtn.textContent = 'Got it!';
message.appendChild(closeBtn);

// append the message element to the body element
document.body.appendChild(message);

///// Deleting elements
// message.remove() its recent
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// oldway
// message.parentElement.removeChild(message);

// ///// Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// // not always work as intended cl style
// console.log(message.style.height);
// console.log(message.style.backgroundColor);

// // but we could use the (getComputedStyle method)
// console.log(getComputedStyle(message).height);
// console.log(getComputedStyle(message).color);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

///// Attribute

const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

/// No standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
console.log(logo.setAttribute('company', 'Bankist'));

console.log(logo.getAttribute('src'));
console.log(logo.src);

// If there is a link they both attributes are absolutes
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

///// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); /// not includes called in arrays

// Dont use ,it would overwrite other classes
logo.className = 'Martin';

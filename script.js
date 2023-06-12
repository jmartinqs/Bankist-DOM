'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

///////////////////////////////////////////////

/// Btn scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset);

  console.log(
    'Height/Width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  window.scrollTo({
    right: s1coords.top + window.pageYOffset,
    left: s1coords.left + window.pageXOffset,
    behavior: 'smooth',
  });
});

///// Event delegation: Implementing Page Navegation

/// Event propagation

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)} )`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  // this.style.backgroundColor = randomColor();
  // console.log(e.target, e.currentTarget);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // this.style.backgroundColor = randomColor();
  // console.log(e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  // this.style.backgroundColor = randomColor();
  // console.log(e.target, e.currentTarget);
});

////////////////////////////////////////////////
// Page Navigations

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//1) Add event listener to common parent element
//2) Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////// Building a Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

/// Bad practices because its impractical with many elements
// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

tabsContainer.addEventListener('click', function (e) {
  // We can use a closest method to make click the button possible
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Active tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate content area
  // console.log(clicked.dataset.tab);
  // document
  //   .querySelector(`.operations__content--${clicked.dataset.tab}`)
  //   .classList.add('operations__content--active');

  const clickedTab = clicked.dataset.tab;
  // Siempre establecer los const que sino falla
  tabsContent.forEach(tabsContent => {
    tabsContent.classList.remove('operations__content--active');
    if (tabsContent.classList.contains(`operations__content--${clickedTab}`)) {
      tabsContent.classList.add('operations__content--active');
    }
  });
});

////////////////////////////////////////////////
////////////////////////////////////////////////

//Event target

////////// selecting creating and deleting elements ///////

// console.log(document.documentElement);

///// Selecting Elements

/// querySelector
// document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// // console.log(allSections);

// /// getElementBy
// document.getElementById('.section--1');
// const allButtons = document.getElementsByTagName('button');
// // console.log(allButtons);

// /// getElementByClassName
// document.getElementsByClassName('btn');

// ///// Creating and inserting elements
// // .insertAdjacentHTML();

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookies for analytics and personalized content.';

// const closeBtn = document.createElement('button');
// closeBtn.classList.add('btn--close-cookie');
// closeBtn.textContent = 'Got it!';
// message.appendChild(closeBtn);

// // append the message element to the body element
// document.body.appendChild(message);

// ///// Deleting elements
// // message.remove() its recent
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

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

// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// /// No standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// console.log(logo.setAttribute('company', 'Bankist'));

// console.log(logo.getAttribute('src'));
// console.log(logo.src);

// // If there is a link they both attributes are absolutes
// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// ///// Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c'); /// not includes called in arrays

// // Dont use ,it would overwrite other classes
// logo.className = 'Martin';

////// Smooth scrolling ////////
/// old school of doing smooth scroll

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset);

//   console.log(
//     'Height/Width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   window.scrollTo({
//     right: s1coords.top + window.pageYOffset,
//     left: s1coords.left + window.pageXOffset,
//     behavior: 'smooth',
//   });
// });

//// new way of doing it

// section1.scrollIntoView({ behavior: 'smooth' });

/// Scrolling
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

// window.scrollTo({
//   right: s1coords.top + window.pageYOffset,
//   left: s1coords.left + window.pageXOffset,
//   behavior: 'smooth',
// });

/////// Types of events and Events handlers //////////

// const h1 = document.querySelector('h1');

// // h1.onmouseenter = function (e) {
// //   alert('addEventListener: You are reading the heading :D');
// // };

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

/// <h1 onlick="alert"('HTML alert')"> alert en html

///// Event bubbling and capturing

///// Event propagation in practices

// cambios de color con eventlistener click

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)} )`;

// console.log(randomColor(0, 255));

/////////////// DOM Transversing /////////////////

// we can select an element based on another element

// const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'white';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var (--gradient-secondary)';

// h1.closest('h1').style.background = 'var (--gradient-primary)';

// /// Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

/// examples dom trversing

// const list = document.querySelector('.list');
// const listItems = list.children;

// console.log(listItems);

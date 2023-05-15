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

console.log(document.documentElement);

///// Selecting Elements

/// querySelector
document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

/// getElementBy
document.getElementById('.section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

/// getElementByClassName
document.getElementsByClassName('btn');

///// Creating and inserting elements
// .insertAdjacentHTML();

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>';

/// not working
// header.prepend(message);
// header.append(message);

// header.before(message);
// header.after(message);

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
// message.parentElement.removeChild(message)

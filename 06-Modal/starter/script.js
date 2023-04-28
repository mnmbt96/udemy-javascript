'use strict';

let showModal = document.querySelector('.show-modal');
let closeModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal'); //hidden
let overlay = document.querySelector('.overlay');
let body = document.querySelector('.body');

//OPEN
//Modal appears and background gets blur
const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//CLOSE
//Opposite to OPEN
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//show-modal loop
for (i = 0; i < showModal.clientHeight; i++) {
  showModal[i].addEventListener('click', function () {
    open();
  });
}

//Click close buttun to close
closeModal.addEventListener('click', function () {
  close();
});

//Click overlay to close
overlay.addEventListener('click', function () {
  close();
});

//Push src key to close
document.addEventListener('key', function (event) {
  if ((event.key = 'esc')) {
    close();
  }
});

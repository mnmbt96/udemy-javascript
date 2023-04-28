'use strict';

// const modal = document.querySelector('.modal');
// const overay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModel = function () {
  modal.classList.remove('hidden');
  overay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModel);

const closeModel = function () {
  modal.classList.add('hidden');
  overay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModel);

overay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});

console.log(openModal);

'use strict';

const button = document.querySelector('.btn');
const modalWrap = document.querySelector('.modal-wrp');

button.addEventListener('click', function () {
  modalWrap.classList.toggle('hidden');
});



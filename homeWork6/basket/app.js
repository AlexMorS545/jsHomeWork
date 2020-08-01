'use strict';

const buttonEl = document.querySelector('.btn-basket');
const modalWrap = document.querySelector('.modal-basket');
const product = document.querySelector('.product');

buttonEl.addEventListener('click', function () {
	modalWrap.classList.toggle('hidden');
});

const btnInBasket = document.querySelectorAll('.toBasket');

btnInBasket.forEach(function(button) {
	button.addEventListener('click', function(event) {
		let id = event.target.dataset.id;
		let name = event.target.dataset.name;
		let price = event.target.dataset.price;
	});
});

const basket = {

};
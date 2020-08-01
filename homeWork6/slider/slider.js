'use strict';

const slider = document.querySelector('.slider');

const iconLoad = document.createElement('i');
iconLoad.classList.add('fas', 'fa-circle-notch', 'fa-spin');
slider.insertAdjacentElement('afterbegin', iconLoad);

const rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-right', 'right');
slider.insertAdjacentElement('beforeend', rightArrow);

const leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-left', 'left');
slider.insertAdjacentElement('beforeend', leftArrow);

window.addEventListener('load', function() {
	iconLoad.style.display = 'none';

	images.init();

	rightArrow.addEventListener('click', function() {
		images.showRightSlide();
	});

	leftArrow.addEventListener('click', function() {
		images.showLeftSlide();
	});
});

let images = {

	itemId: 0,
	slides: [],

	init() {
		this.slides = document.querySelectorAll('.item');
		this.showSlide();
	},

	showSlide() {
		this.slides[this.itemId].classList.remove('hidden');
	},

	hiddenSlide() {
		document.querySelector('.item:not(.hidden)').classList.add('hidden');
		this.slides[this.itemId].classList.remove('animate__animated', 'animate__fadeInRight', 'animate__fadeInLeft');
	},

	showRightSlide () {
		this.hiddenSlide();
		if(this.itemId == this.slides.length - 1) {
			this.itemId = 0;
		} else {
			this.itemId++;
		}
		this.showSlide();
		this.slides[this.itemId].classList.add('animate__animated', 'animate__fadeInRight');
	},

	showLeftSlide() {
		this.hiddenSlide();
		if (this.itemId == 0) {
			this.itemId = this.slides.length - 1;
		} else {
			this.itemId--;
		}
		this.showSlide();
		this.slides[this.itemId].classList.add('animate__animated', 'animate__fadeInLeft');
	}
};

'use strict';

const body = document.querySelector('body');

const iconLoad = document.createElement('i');
iconLoad.classList.add('fas', 'fa-circle-notch', 'fa-spin');
body.insertAdjacentElement('afterbegin', iconLoad);

window.addEventListener('load', function() {

	iconLoad.style.display = 'none';

	const player = document.querySelector('.video');
	player.playbackRate = 0.5;

	const menu = document.querySelector('.header-menu');
	const btn = document.querySelector('.menu-burger');

	btn.addEventListener('click', function () {

		menu.classList.toggle('hidden');
		menu.classList.add('animate__backInDown');

		menu.className = menu.className == 'header-menu animate__animated animate__backInDown hidden' ? 'header-menu animate__animated animate__backOutUp' : 'header-menu animate__animated animate__backInDown';

	});

	const parallaxItem = document.querySelectorAll('.parallax-item');

	function  parallaxEffect(event) {

		parallaxItem.forEach(item => {

			const speed = item.getAttribute('data-speed');
			item.style.transform = `translateX(${event.clientX*speed/1000}px)`
		});
	}

	document.addEventListener('mousemove', parallaxEffect);

	const btnParallax = document.querySelector('.project1');
	const videoEl = document.querySelector('.video');
	const parallaxBox = document.querySelector('.parallax-box');
	const listBox = document.querySelector('.list-box');

	btnParallax.addEventListener('click', function() {
	
		videoEl.classList.add('animate__zoomOut');
		parallaxBox.classList.add('animate__zoomIn');
		listBox.classList.add('animate__fadeInUpBig');
		setTimeout(() => {
			menu.classList.add('animate__backOutUp'); 
			videoEl.classList.add('hidden');
			parallaxBox.classList.remove('hidden');
		}, 500);

		setTimeout(() => {
			listBox.classList.remove('hidden');
		}, 1500);

	});
});







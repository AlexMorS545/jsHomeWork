'use strict';

const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button) {
	button.addEventListener('click', function(event) {
		button.classList.toggle('active');
		changeProductCard(event);
	});
});

function changeProductCard(event) {
	const productCard = event.target.parentNode;

	const card = {
		cardWrp: productCard.querySelector('.product'),
		title: productCard.querySelector('.product-title'),
		textDesc: productCard.querySelector('.desc'),
		image: productCard.querySelector('img'),
		button: productCard.querySelector('.btn')
	}

	const text = 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Алфавит предупредила назад ее толку переписывается страну рот которое там.';

	if (card.button.classList.contains('active')) {
		card.image.style.display = 'none';
		card.button.innerText = 'Отмена';
		card.button.insertAdjacentHTML('beforebegin', `<div class="desc">${text}</div>`);
	} else {
		card.image.style.display = 'block';
		card.button.innerText = 'Подробнее';
		card.textDesc.remove();
	}
}


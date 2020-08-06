'use strict';

const buttonEl = document.querySelector('.btn-basket');
const modalWrap = document.querySelector('.modal-basket');


buttonEl.addEventListener('click', function () {
	modalWrap.classList.toggle('hidden');
});

const btnInBasket = document.querySelectorAll('.toBasket');

btnInBasket.forEach(function(button) {
	button.addEventListener('click', function(event) {
		let id = event.target.dataset.id;
		let name = event.target.dataset.name;
		let price = event.target.dataset.price;
		basket.addProductToBasket({id: id, name: name, price: price});
	});
});

const basket = {
	
	products: {},

	addProductToBasket(product) {
		this.addProduct(product);
		this.productInBasket(product);
		this.basketTotalPrice();
		this.addRemoveBtnsListeners();
	},

	addProduct(product) {
		if (this.products[product.id] == undefined) {
			this.products[product.id] = {
				price: product.price,
				name: product.name,
				count: 1
			}
		} else {
			this.products[product.id].count++;
		}
	},
	
	productInBasket(product) {

		const productAdd = 
			`<tr>
				<th scope="row">${product.id}</th>
				<td>${product.name}</td>
				<td>${product.price}</td>
				<td data-id="${product.id}">1</td>
				<td><i class="fas fa-trash" data-id="${product.id}"></i></td>
			</tr>`;

		const itemInBasket = document.querySelector(`td[data-id="${product.id}"]`);

		if (itemInBasket) {
			itemInBasket.textContent++;
		} else {
			const tbody = document.querySelector('tbody');
			tbody.insertAdjacentHTML("beforeend", productAdd);
		}
	},

	basketTotalPrice() {
		
		let sum = 0;
		
		for (let i in this.products) {
			sum += this.products[i].price * this.products[i].count;
		}

		document.querySelector('.summa').textContent = sum;
	},
	
	removeProduct(event) {
		let id = event.srcElement.dataset.id;
		this.removeProductFromObject(id);
		this.removeProductFromBasket(id);
	},

	addRemoveBtnsListeners() {
		let btns = document.querySelectorAll('.fa-trash');
		for (let i = 0; i < btns.length; i++) {
			btns[i].addEventListener('click', this.removeProductListener);
		}
	},
	
	removeProductListener(event) {
		basket.removeProduct(event);
		basket.basketTotalPrice();
	},
	
	removeProductFromBasket(id) {
		let countTd = document.querySelector(`td[data-id="${id}"]`);
		if (countTd.textContent == 1) {
			countTd.parentNode.remove();
		} else {
			countTd.textContent--;
		}
	},
	
	removeProductFromObject(id) {
		if (this.products[id].count == 1) {
			delete this.products[id];
		} else {
			this.products[id].count--;
		}
	}
};
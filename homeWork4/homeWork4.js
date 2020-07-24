'use strict';

// Задание 1.1

// ES 5

function Product (name, price) {
	this.name = name;
	this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
	this.price = this.price - (this.price / 100 *25);
	return this.price;
}

const prod1 = new Product('bread', 100);
prod1.make25PercentDiscount();
console.log(prod1);

// ES 6

class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	make25PercentDiscount () {
		this.price = this.price - (this.price / 100 *25);
		return this.price;
	}
}

const prod1 = new Product('bread', 100)
prod1.make25PercentDiscount();
console.log(prod1);


// Задание 1.2

// ES 5

function Post(autor, text, date) {
	this.autor = autor;
	this.text = text;
	this.date = date;
}

Post.prototype.edit = function (text) {
	this.text = text;
}

const post1 = new Post('Alex', 'Привет Всем', new Date());
console.log(post1);
post1.edit('Как дела?');
console.log(post1);

function AttachedPost(autor, text, date) {
	Post.call(this, autor, text, date);
	this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
	this.highlighted = true;
}

const attachPost1 = new AttachedPost('Ivan', 'Привет Мир', new Date());

console.log(attachPost1);
attachPost1.makeTextHighlighted();
attachPost1.edit('Ура! Лето');
console.log(attachPost1);

// ES 6

class Post {
	constructor(autor, text, date) {
		this.autor = autor;
		this.text = text;
		this.date = date;
	}
	edit(text) {
		this.text = text;
	}
}

const post1 = new Post('Alex', 'Привет Всем', new Date());
console.log(post1);
post1.edit('Как дела?');
console.log(post1);

class AttachedPost extends Post {
	constructor(autor, text, date) {
		super (autor, text, date);
		this.highlighted = false;
	}
	makeTextHighlighted() {
		this.highlighted = true;
	}
}

const attachPost1 = new AttachedPost('Ivan', 'Привет Мир', new Date());

console.log(attachPost1);
attachPost1.makeTextHighlighted();
attachPost1.edit('Ура! Лето');
console.log(attachPost1);
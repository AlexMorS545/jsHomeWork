// Задание 1

for (i = 0; i <= 10; i++) {
	if (i == 0) {
		console.log(i + ' - это ноль');
	} else if ((i % 2) == 0) {
		console.log(i + ' - четное число');
	} else if ((i % 2) == 1) {
		console.log(i + ' - нечетное число');
	}
}

// Задание 2

const post = { 
	author: "John", //вывести этот текст
	postId: 23,
	comments: [
		{ userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2 //вывести это число
			}
		},
		{
			userId: 5, //вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", //вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1
			}
		},
	]
}

console.log(post.author); // Вывод имени John
console.log(post.comments[0].rating.dislikes); // Вывод количества dislikes
console.log(post.comments[1].userId); // Вывод userId
console.log(post.comments[1].text); //Вывод текста */

// Задание 3

const products = [ 
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];

products.forEach(function (discountPrice) {
	discountPrice.price = discountPrice.price - ((discountPrice.price * 15) / 100);
	console.log(discountPrice.price);
});

// Задание 4

const products = [
	{
		id: 3,
		price: 127,
		photos: [
			"1.jpg",
			"2.jpg",
		]
	},
	{
		id: 5,
		price: 499,
		photos: []
	},
	{
		id: 10,
		price: 26,
		photos: [
			"3.jpg"
		]
	},
	{
		id: 8,
		price: 78,
	},
];

/** 
 * Функция выводит массив где есть фотографии продукта
 * @type {arr} 
 * */
const result = products.filter(function (productPhoto) {
	if (productPhoto.photos == 0) {
		return false;
	}
	return productPhoto.photos;
});
console.log(result);

// Сортировка товара по возрастанию в цене
products.sort(function(a, b) {
	return a.price - b.price;
});
console.log(products);
'use strict';

let myNodelist = document.getElementsByTagName("LI");

let btnAdd = document.querySelector('.addBtn');
btnAdd.addEventListener('click', function() {
	newElement();
});

for (let i = 0; i < myNodelist.length; i++) {
	let span = document.createElement("SPAN");
	let txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
	close[i].addEventListener('click', () => {
		let div = myNodelist[i];
		div.style.display = "none";
	});
}

let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
	if (event.target.tagName === 'LI') {
	event.target.classList.toggle('checked');
	}
}, false);

function newElement() {
	let li = document.createElement("li");
	let inputValue = document.getElementById("input").value;
	let t = document.createTextNode(inputValue);
	li.appendChild(t);
	
	if (inputValue === '') {
		alert('Нужно что-нибудь написать');
	} else {
		document.getElementById("list").appendChild(li);
	}
	document.getElementById("input").value = "";

	let span = document.createElement("SPAN");
	let txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	
	let close = document.getElementsByClassName("close");

	for (let i = 0; i < close.length; i++) {
		close[i].addEventListener('click', () => {
			let div = myNodelist[i];
			div.style.display = "none";
		});
	}
}


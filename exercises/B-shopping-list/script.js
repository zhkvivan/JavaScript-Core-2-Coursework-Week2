function shoppingList(arrayOfGoods) {
	let divWrap = document.querySelector('#content');
	let ul = document.createElement('ul');
	divWrap.appendChild(ul);
	for (let i = 0; i < arrayOfGoods.length; i++) {
		let li = document.createElement('li');
		ul.appendChild(li);
		li.textContent = arrayOfGoods[i];
	}
}

let shopping = ['Milk', 'Bread', 'Eggs', 'A Dinosaur', 'Cake', 'Sugar', 'Tea'];

shoppingList(shopping);

function listOfColours(colours) {
	let content = document.querySelector('#content');

	let dropdown = document.createElement('select');
	content.appendChild(dropdown);

	let p = document.createElement('p');
	content.append(p);

	colours.forEach((colour) => {
		let option = document.createElement('option');
		dropdown.appendChild(option);
		option.textContent = colour;
		option.value = colour;
		dropdown.addEventListener('change', () => {
			p.textContent = 'You have selected: ' + dropdown.value;
			p.style.color = dropdown.value;
		});
	});
}

const colours = ['red', 'blue', 'green', 'yellow', 'pink', 'brown'];

listOfColours(colours);

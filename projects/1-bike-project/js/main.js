function changeTheme() {
	let jumbotron = document.querySelector('.jumbotron');
	let donateBtn = document.querySelector('#donateBtn');
	let volunteerBtn = document.querySelector('#volunteerBtn');

	let blueBtn = document.querySelector('#blueBtn');
	let orangeBtn = document.querySelector('#orangeBtn');
	let greenBtn = document.querySelector('#greenBtn');

	blueBtn.addEventListener('click', () => {
		jumbotron.style.backgroundColor = '#588fbd';
		donateBtn.style.backgroundColor = '#ffa500';
		volunteerBtn.style.backgroundColor = 'black';
		volunteerBtn.style.color = 'white';
	});

	orangeBtn.addEventListener('click', () => {
		jumbotron.style.backgroundColor = '#f0ad4e';
		donateBtn.style.backgroundColor = '#5751fd';
		volunteerBtn.style.backgroundColor = '#31b0d5';
		volunteerBtn.style.color = 'white';
	});

	greenBtn.addEventListener('click', () => {
		jumbotron.style.backgroundColor = '#87ca8a';
		donateBtn.style.backgroundColor = 'black';
		volunteerBtn.style.backgroundColor = '#8c9c08';
	});
}

changeTheme();

function formValidation() {
	let emailInput = document.querySelector('#exampleInputEmail1');
	let nameInput = document.querySelector('#example-text-input');
	let textInput = document.querySelector('#exampleTextarea');
	//let formBtn = document.forms[0].elements[document.forms[0].length - 1];
	let formBtn = document.querySelector('button[type=submit]');

	formBtn.addEventListener('click', (event) => {
		
		if (nameInput.value.length === 0) {
			nameInput.style.backgroundColor = 'red';
		}
		if (textInput.value.length === 0) {
			textInput.style.backgroundColor = 'red';
		}
		if (!emailInput.value.includes('@')) {
			emailInput.style.backgroundColor = 'red';
		}
		if (
			nameInput.value.length > 0 &&
			textInput.value.length > 0 &&
			emailInput.value.includes('@')
		) {
			nameInput.value = '';
			textInput.value = '';
			emailInput.value = '';
			nameInput.style.backgroundColor = 'transparent';
			textInput.style.backgroundColor = 'transparent';
			emailInput.style.backgroundColor = 'transparent';

			alert('thanks');
		}
		event.preventDefault();
	});
}

formValidation();

function listOfNames(arrayOfPeople) {
	let content = document.querySelector('#content');
	for (let i = 0; i < arrayOfPeople.length; i++) {
		let name = document.createElement('h1');
		let job = document.createElement('h2');

		name.textContent = arrayOfPeople[i].name;
		job.textContent = arrayOfPeople[i].job;

		content.appendChild(name);
		content.appendChild(job);

	}
}

let people = [
	{ name: 'Chris', job: 'Teacher' },
	{ name: 'Joanna', job: 'Student' },
	{ name: 'Boris', job: 'Prime Minister' },
];

listOfNames(people);

function todoList(todos) {
	let content = document.querySelector('#content');
	let todoList = document.createElement('ul');
	content.appendChild(todoList);
	todos.forEach(object => {
		let todoValue = document.createElement('li');
		todoValue.className = 'todo-value';
		todoList.appendChild(todoValue);
		todoValue.textContent = object.todo;
	});

	let todoItems = document.querySelectorAll('.todo-value');
	console.log(todoItems)
	function lineThrough (event) {
		console.log(event.target)
		if (!event.target.style.textDecoration) {
			event.target.style.textDecoration = 'line-through';
		} else if (event.target.style.textDecoration) {
			event.target.style.textDecoration = '';
		}
	};

	todoItems.forEach((todoItem) => {
		todoItem.addEventListener('click', lineThrough)
	})
}

const todos = [
	{ todo: 'wash the dishes' },
	{ todo: 'walk the dog' },
	{ todo: 'learn javascript' },
	{ todo: 'go shopping' },
];

todoList(todos);

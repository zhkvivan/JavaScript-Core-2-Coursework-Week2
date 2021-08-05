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
	function lineThrough (li) {
		if (!li.style.textDecoration) {
			li.style.textDecoration = 'line-through';
		};
	};
	todoItems.forEach(lineThrough)
	//todoItems.forEach((todoItem) => {
		//todoItem.addEventListener('click', lineThrough)
	//})
}

const todos = [
	{ todo: 'wash the dishes' },
	{ todo: 'walk the dog' },
	{ todo: 'learn javascript' },
	{ todo: 'go shopping' },
];

todoList(todos);

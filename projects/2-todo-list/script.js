function addTodo(todo) {
	let list = document.getElementById('todo-list');
	let newTodo = document.createElement('li');
	list.append(newTodo);
	newTodo.textContent = todo.task;
	newTodo.style.listStyleType = 'none';
	newTodo.classList =
		'list-group-item d-flex justify-content-between align-items-center';

	let badge = document.createElement('span');
	badge.classList = 'badge bg-primary rounded-pill';
	newTodo.append(badge);

	let check = document.createElement('i');
	check.classList = 'fa fa-check';
	check.ariaHidden = 'true';
	badge.append(check);
	check.addEventListener('click', () => {
		newTodo.style.textDecoration = 'line-through';
	});

	let trash = document.createElement('i');
	trash.classList = 'fa fa-trash';
	trash.ariaHidden = 'true';
	badge.append(trash);
	trash.addEventListener('click', () => {
		newTodo.remove()
	});
}

function populateTodoList(todos) {
	// Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
	todos.forEach(addTodo);
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
	{ task: 'Wash the dishes', completed: false },
	{ task: 'Do the shopping', completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
	// The code below prevents the page from refreshing when we click the 'Add Todo' button.
	event.preventDefault();
	// Write your code here... and remember to reset the input field to be blank after creating a todo!
	let newTodo = document.querySelector('#todoInput');
	let todoObject = {
		task: newTodo.value,
	};
	addTodo(todoObject);
	newTodo.value = ''
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
	// Write your code here...
}

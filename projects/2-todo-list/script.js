function addTodo(todo) {

	let list = document.getElementById('todo-list');
	let newTodo = document.createElement('li');
	list.append(newTodo);
	newTodo.textContent = todo.text;
	newTodo.style.listStyleType = 'none';
	newTodo.classList =
		'list-group-item d-flex justify-content-between align-items-center';
	if (todo.completed === true) {
		newTodo.style.textDecoration = 'line-through';
	}
	
	let badge = document.createElement('span');
	badge.classList = 'badge bg-primary rounded-pill';
	newTodo.append(badge);

	let check = document.createElement('i');
	check.classList = 'fa fa-check';
	check.ariaHidden = 'true';
	check.style.marginRight = '5px';
	badge.append(check);
	check.addEventListener('click', () => {
		todo.completed = !todo.completed;
		populateTodoList(todos);
	});

	let trash = document.createElement('i');
	trash.classList = 'fa fa-trash';
	trash.ariaHidden = 'true';
	badge.append(trash);
	trash.addEventListener('click', () => {
		todos = todos.filter(todoObject => {
			return todoObject.text != todo.text;
		})
		populateTodoList(todos)
	});
}

function populateTodoList(todos) {
	let list = document.getElementById('todo-list');
	list.replaceChildren();
	todos.forEach(addTodo);
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
	{ text: 'Wash the dishes', completed: false },
	{ text: 'Do the shopping', completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
	// The code below prevents the page from refreshing when we click the 'Add Todo' button.
	event.preventDefault();

	// Creating new object for the todos array and adding it there
	let newTodoText = document.querySelector('#todoInput');
	let newTodoObject = {
		text: newTodoText.value,
		completed: false,
	};
	todos.push(newTodoObject);
	newTodoText.value = '';
	populateTodoList(todos)
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
	// Creating array for forEach
	let list = document.getElementById('todo-list');
	let listChildren = list.children;
	let todosArray = Array.from(listChildren);

	// Creating a wrapper for the Delete Button
	let deleteBtnWrap = document.createElement('div');
	deleteBtnWrap.className = 'col-auto';
	document.forms[0].append(deleteBtnWrap);

	// Creating the Delete Button
	let addBtn = document.forms[0].elements[document.forms[0].length - 1];
	let deleteBtn = addBtn.cloneNode(true);
	deleteBtnWrap.append(deleteBtn);
	deleteBtn.textContent = 'Delete Completed';
	deleteBtn.removeAttribute('onclick');

	deleteBtn.addEventListener('click', (event) => {
		event.preventDefault();
		todos = todos.filter(todoObject => {
			return todoObject.completed === false;
		})
		populateTodoList(todos)
	})
}

deleteAllCompletedTodos();
function readingList(books) {
	let ulWrap = document.querySelector('#content');
	let listOfBooks = document.createElement('ul');
	listOfBooks.style.display = 'flex';
	listOfBooks.style.flexWrap = 'wrap';

	ulWrap.appendChild(listOfBooks);
	for (let i = 0; i < books.length; i++) {
		let newBook = document.createElement('li');
		listOfBooks.appendChild(newBook);
		newBook.className = 'book';
		newBook.style.listStyleType = 'none';
		newBook.style.width = '400px';
		newBook.style.height = '400px';
		newBook.style.padding = '20px';
		newBook.style.margin = '30px';

		let p = document.createElement('p');
		newBook.appendChild(p);
		p.style.marginBottom = '50px';

		p.textContent = books[i].title + ' by ' + books[i].author;

		let image = document.createElement('img');
		newBook.appendChild(image);
		image.style.maxWidth = '300px';
		image.style.maxHeight = '300px';
		image.src = booksCover[i];

		if (books[i].alreadyRead) {
			newBook.style.backgroundColor = 'green';
		} else newBook.style.backgroundColor = 'red';
	}
}

const booksCover = [
	'https://static.epub.vn/epubvn-image/optimized-cover1570413642597-artworks-000442818750-sxidwx-t500x500.jpg',
	'https://machinatorium.files.wordpress.com/2012/10/human-cover1.jpg',
	'https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SS600_.jpg',
];

const books = [
	{
		title: 'The Design of Everyday Things',
		author: 'Don Norman',
		alreadyRead: false,
	},
	{
		title: 'The Most Human Human',
		author: 'Brian Christian',
		alreadyRead: true,
	},
	{
		title: 'The Pragmatic Programmer',
		author: 'Andrew Hunt',
		alreadyRead: true,
	},
];

readingList(books);

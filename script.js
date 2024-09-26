function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


const myLibrary = [{ title: 'Hobbit', author: 'J.R.R. Tolkien', pages: 295, read: false }]


const addButton = document.getElementById("add")
const displayAuthor = document.getElementById("displayAuthor")
const displayTitle = document.getElementById("displayTitle")
const displayPages = document.getElementById("displayPages")
const displayRead = document.getElementById("displayRead")

addButton.addEventListener('click', (event) => {
    event.preventDefault()
    addBookToLibrary()
})

function addBookToLibrary() {
    let bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value
    const bookPages = document.getElementById("pages").value
    const bookRead = document.getElementById("read").checked

    const book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(book)
    displayBooks(myLibrary)
}


function displayBooks(arr) {
    arr.forEach((book) => {
        displayAuthor.textContent = book.author;
        displayTitle.textContent = book.title;
        displayPages.textContent = book.pages;
        displayRead.textContent = book.read;
    });
}
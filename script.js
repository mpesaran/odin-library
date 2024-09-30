function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleReadStatus = function () {
    this.read = !this.read;
};
const myLibrary = []

document.addEventListener('DOMContentLoaded', () => {
    displayBooks(myLibrary);
});

const addButton = document.getElementById("add")
const booksContainer = document.getElementById("booksContainer");
const dialog = document.getElementById("bookDialog")
const showButton = document.getElementById("openDialog")
const closeButton = document.getElementById("closeDialog")

addButton.addEventListener('click', (event) => {
    event.preventDefault()
    addBookToLibrary()
})

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

function addBookToLibrary() {
    let bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value
    const bookPages = document.getElementById("pages").value
    const bookRead = document.getElementById("read").checked

    if (bookTitle === "" || bookAuthor === "" || bookPages === "") {
        alert("Please fill in all the fields.");
        return; // Exit function if any field is empty
    }

    const book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(book)
    displayBooks([book])
    clearForm();
}


function displayBooks(arr) {
    arr.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('book-card');

        const title = document.createElement('h4');
        title.textContent = `Title: ${book.title}`;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;

        const readStatus = document.createElement('p');
        readStatus.textContent = book.read ? "Read: Yes" : "Read: No";
        readStatus.classList.add('read-status');

        const deleteButton = document.createElement('button');
        deleteButton.classList.add("delete-button")
        deleteButton.textContent = "Remove"

        deleteButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            booksContainer.removeChild(card)
        });

        const toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = "Toggle Read";
        toggleReadButton.classList.add('toggle-read-button');

        toggleReadButton.addEventListener('click', () => {
            book.toggleReadStatus();
            readStatus.textContent = book.read ? "Read: Yes" : "Read: No";
        });

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('card-buttons');

        buttonContainer.appendChild(deleteButton);
        buttonContainer.appendChild(toggleReadButton);

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);
        card.appendChild(buttonContainer);

        booksContainer.appendChild(card);
    });
}




function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
}


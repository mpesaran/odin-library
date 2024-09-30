function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


const myLibrary = [{ title: 'Hobbit', author: 'J.R.R. Tolkien', pages: 295, read: false }]

document.addEventListener('DOMContentLoaded', () => {
    displayBooks(myLibrary);
});

const addButton = document.getElementById("add")
const booksContainer = document.getElementById("booksContainer");
const dialog = document.querySelector("dialog")
const showButton = document.querySelector("dialog + button")
const closeButton = document.querySelector("dialog button")

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

        const title = document.createElement('h3');
        title.textContent = `Title: ${book.title}`;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;

        const readStatus = document.createElement('p');
        readStatus.textContent = book.read ? "Read: Yes" : "Read: No";

        const deleteButton = document.createElement('button');
        deleteButton.classList.add("delete-button")
        deleteButton.textContent = "X"

        deleteButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            booksContainer.removeChild(card)
        })

        card.appendChild(deleteButton);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);

        booksContainer.appendChild(card);
    });
}




function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
}
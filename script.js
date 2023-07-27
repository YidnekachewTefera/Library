const addBook = document.querySelector(".addButton");
const container = document.querySelector(".main-wrapper");
const booksPlate = document.querySelector(".books-form");
const books = document.querySelector(".books");
const bookList = [];
addBook.addEventListener("click", () => {
  container.classList = "displayForm";
});
function addBooks(e) {
  e.preventDefault();
  container.classList = "main-wrapper";
  const title = this.querySelector("[name=title]").value;
  const author = this.querySelector("[name=author]").value;
  const page = this.querySelector("[name=page]").value;
  const book = {
    title,
    author,
    page,
    done: false,
  };
  bookList.push(book);
  console.log(bookList);
  this.reset();
}
booksPlate.addEventListener("submit", addBooks);

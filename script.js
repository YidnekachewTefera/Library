const bodyy = document.querySelector("body");
const addBook = document.querySelector(".addButton");
const container = document.querySelector(".main-wrapper");
const booksPlate = document.querySelector(".books-form");
const books = document.querySelector(".books");
const bookList = JSON.parse(localStorage.getItem("myLibrary")) || [];
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
    read_status: false,
  };
  bookList.push(book);
  populateList(bookList, books);
  localStorage.setItem("myLibrary", JSON.stringify(bookList));
  this.reset();
}
booksPlate.addEventListener("submit", addBooks);
function populateList(book = [], booksContainer) {
  booksContainer.innerHTML = book.map((boo, i) => {
    return `
    <div id="item${i}">
      <ul>
          <li id="title${i}">Title:  ${boo.title}</li>
          <li id="author${i}">Author: ${boo.author}</li>
          <li id="pageOf${i}">Pages: ${boo.page}</li>
          <li id="readStatusOf${i}">
              <div class="readStatus">Read</div>
          </li>
          <li class="delete-edit-button-container"><button class="delete" id="delete" data-index=${i}> Delete</button><button class="edit" data-index=${i}>Edit</button></li>
      </ul>
    </div>
    `;
  });
}
populateList(bookList, books);
const deletee = document.querySelector(".delete");
/*function deletionAvoided() {}
function deleteConfirmation(e) {
  const card = this.parentElement.parentElement.parentElement;
  function deleteBook(containerr) {
    containerr.remove();
  }
  const dialogBox = document.createElement("div");
  dialogBox.backgroundColor=white;
  dialogBox.textAlign; 
  console.log(dialogBox);
  /*`
  <div style="background-color:white; text-align:center">
    <h1>Are you sure?</h1>
    <button class="yes" style="background-color:red">Yes</button><button class="no" style="background-color:green">No</button>
  </div>
`*/
/*bodyy.append(dialogBox);
  const yes = document.querySelector(".yes");
  const no = document.querySelector(".no");
  yes.addEventListener("click", deleteBook(card));
  no.addEventListener("click", deletionAvoided);
}
*/
function deleteBook(e) {
  if (e.target.id != "delete") return;
  let el = e.target;
  let Index = el.dataset.index;
  console.log(Index);
  e.target.parentElement.parentElement.parentElement.remove();
  const storedData = JSON.parse(localStorage.getItem("myLibrary"));
  console.table(storedData);
}
function edit(e) {
  if (e.target.id != "edit") return;
  console.log("edit button clicked");
}
books.addEventListener("click", deleteBook);

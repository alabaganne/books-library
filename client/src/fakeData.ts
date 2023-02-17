import Book from './interfaces/book';

const book: Book = {
  id: 1,
  title: 'Shadowlands: A Journey Through Lost Britain',
  authorId: 1,
  authorName: 'Matthew Green',
  price: 450.43,
  priceOld: 550.21,
};

let books5: Array<Book> = [];
let books20: Array<Book> = [];
for (let i = 0; i < 20; i++) {
  if (i < 5) books5.push(book);
  books20.push(book);
}

export { book, books5, books20 };

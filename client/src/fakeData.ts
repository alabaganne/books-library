import Book from './interfaces/book';
import Genre from './interfaces/genre';
import image from './assets/shadowlands.jpg';

const book: Book = {
  id: 1,
  title: 'Shadowlands: A Journey Through Lost Britain',
  description: `The Alchemist" is a novel that tells the story of a young shepherd boy named Santiago who dreams of exploring the world and finding his treasure. He decides to follow his dream and embarks on a journey to Egypt, where he believes his treasure lies buried in the pyramids.`,
  authorId: 1,
  authorName: 'Matthew Green',
  imageUrl: image,
  price: 450.43,
  priceOld: 550.21,
};

let books5: Array<Book> = [];
let books30: Array<Book> = [];
for (let i = 0; i < 30; i++) {
  if (i < 5) books5.push(book);
  books30.push(book);
}

const genre: Genre = {
  id: 1,
  name: 'Self-help',
};

export { book, books5, books30, genre };

export default interface Book {
  id: number;
  title: string;
  description: string;
  authorId: number;
  authorName: string;
  imageUrl?: string;
  price: number;
  priceOld: number;
}

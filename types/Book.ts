import { Image } from "./Image";

interface BookSummary {
  type: string;
  children: {
    type: string;
    text: string;
    bold?: boolean;
  };
}

export interface Book {
  id: number;
  title: string;
  author: string;
  summary: BookSummary[];
  isbn: string;
  price: number;
  isNewRelease: boolean;
  slug: string;
  numberOfPages: number;
  language: string;
  publicationDate: string;
  bookSerieNumber?: boolean;
  image: Image;
}

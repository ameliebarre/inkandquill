import { Image } from "./Image";

interface Author {
  id: number;
  name: string;
  role: string;
}

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
  authors: Author[];
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

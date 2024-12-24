import { Category } from "./category";
import { RichTextBlock } from "./common";
import { Image } from "./Image";

interface Author {
  id: number;
  name: string;
  role: string;
}

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  summary: RichTextBlock[];
  isbn: string;
  price: number;
  isNewRelease: boolean;
  slug: string;
  numberOfPages: number;
  language: string;
  publicationDate: string;
  bookSerieNumber?: boolean;
  image: Image[];
  categories: Category[];
  firstPublicationDate: string;
  editor: string;
  format: "Paperback" | "Hardcover" | "eBook" | "Kindle Edition";
}

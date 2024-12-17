import { Book } from "./book";
import { RichTextBlock } from "./common";

export interface Category {
  id: number;
  title: string;
  text: RichTextBlock[];
  slug: string;
  featured: boolean;
  books?: Book[];
}

interface CategorySectionBlock {
  __component: string;
  id: string;
  bookcategory: [
    {
      id: string;
      category: Category;
    }
  ];
}

export interface CategorySection {
  data: {
    id: string;
    blocks: CategorySectionBlock[];
  };
}

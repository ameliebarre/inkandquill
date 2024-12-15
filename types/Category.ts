import { Book } from "./book";

export interface Category {
  id: number;
  title: string;
  text?: string | null;
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

import { Book } from "./Book";

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
      category: Category;
    }
  ];
}

export interface CategorySection {
  id: string;
  blocks: CategorySectionBlock[];
}

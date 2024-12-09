import { Book } from "./Book";

export interface Category {
  id: number;
  title: string;
  text?: string | null;
  slug: string;
  featured: boolean;
}

interface CategorySectionBlockCategory {
  id: number;
  title: string;
  books: Book[];
}

interface CategorySectionBlock {
  __component: string;
  id: string;
  categories: {
    id: number;
    categories: CategorySectionBlockCategory[];
  };
}

export interface CategorySection {
  id: string;
  blocks: CategorySectionBlock[];
}

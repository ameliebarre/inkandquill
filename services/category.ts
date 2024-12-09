import { Category, CategorySection } from "@/types/Category";
import { fetchDataFromStrapi } from "./utils";

export async function getCategoryBySlug(slug: string): Promise<Category> {
  return fetchDataFromStrapi(`categories/${slug}`);
}

export async function getCategoriesSection(
  query: string
): Promise<CategorySection> {
  return fetchDataFromStrapi(`category-page?${query}`);
}

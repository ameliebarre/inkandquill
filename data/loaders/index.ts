import { Category } from "@/types/Category";
import { fetchDataFromStrapi } from "@/utils/strapi.utils";

export async function getCategoryBySlug(slug: string): Promise<Category> {
  return fetchDataFromStrapi(`categories/${slug}`);
}

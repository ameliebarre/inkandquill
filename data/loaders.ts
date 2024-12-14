import qs from "qs";
import { getStrapiURL } from "@/lib/utils";
import { CategoryMetaData, CategorySection } from "@/types/category";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getCategoryBySlug(slug: string) {
  return fetchData(`${baseUrl}/api/categories/${slug}`);
}

export async function getCategoriesSection(): Promise<CategorySection> {
  const url = new URL("/api/category-page", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.categories-section": {
            populate: {
              bookcategory: {
                populate: {
                  category: {
                    fields: ["title", "slug"],
                    populate: {
                      books: {
                        fields: ["title", "author", "isNewRelease"],
                        populate: {
                          image: {
                            fields: ["url", "alternativeText"],
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  return fetchData(url.href);
}

export async function getCategories(): Promise<CategoryMetaData> {
  const PAGE_SIZE = 100; // Big value to display all the categories at once
  const query = qs.stringify({
    sort: ["title:asc"],
    pagination: {
      pageSize: PAGE_SIZE,
    },
  });
  const url = new URL("/api/categories", baseUrl);
  url.search = query;
  return fetchData(url.href);
}

import qs from "qs";

import { getStrapiURL } from "@/lib/utils";
import { Book } from "@/types/book";
import { Category, CategorySection } from "@/types/category";
import { MetaData } from "@/types/common";

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

export async function getCategoryBySlug(
  slug: string
): Promise<MetaData<Category>> {
  const url = new URL(`/api/categories/${slug}`, baseUrl);

  url.search = qs.stringify({
    populate: {
      books: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          authors: true,
        },
      },
    },
  });
  return fetchData(url.href);
}

export async function getPaginatedBooksByCategory(
  slug: string,
  page: number,
  pageSize: number
): Promise<MetaData<Book[]>> {
  const url = new URL(`/api/books`, baseUrl);

  url.search = qs.stringify({
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
      authors: true,
    },
    filters: {
      categories: {
        slug: { $eq: slug },
      },
    },
    pagination: {
      page,
      pageSize,
    },
  });

  return fetchData(url.href);
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
                        fields: ["title", "price", "isNewRelease"],
                        populate: {
                          image: {
                            fields: ["url", "alternativeText"],
                          },
                          authors: true,
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

export async function getCategories(): Promise<MetaData<Category[]>> {
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

export async function getBook(slug: string): Promise<MetaData<Book>> {
  const query = qs.stringify({
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
      authors: true,
      categories: true,
    },
  });

  const url = new URL(`/api/books/${slug}`, baseUrl);
  url.search = query;
  return fetchData(url.href);
}

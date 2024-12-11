"use client";

import { getCategories } from "@/data/loaders";
import { Category } from "@/types/category";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await getCategories();
      const { data } = res;
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <aside className="border-r border-solid hidden lg:block lg:min-w-[16%] p-4">
      <nav>
        <h4 className="font-semibold text-base">Categories</h4>
        <ul className="flex flex-col font-light text-sm">
          {categories.map((category) => (
            <li key={category.id} className="hover:text-amber-400">
              <Link
                href="categories/[slug]"
                as={`/categories/${category.slug}`}
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* <ul className="flex flex-col font-light text-sm">
          {sortedCategories.slice(0, visibleCount).map((category) => (
            <li key={category.id} className="hover:text-amber-400">
              <Link
                href="categories/[slug]"
                as={`/categories/${category.slug}`}
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
        {visibleCount < sortedCategories.length && (
          <button
            onClick={handleShowMore}
            className="font-semibold text-sm hover:underline"
          >
            Afficher plus
          </button>
        )} */}
      </nav>
    </aside>
  );
}

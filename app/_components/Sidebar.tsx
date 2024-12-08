"use client";
import { Category } from "@/types/Category";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ categories }: { categories: Category[] }) {
  const sortedCategories = categories.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const [visibleCount, setVisibleCount] = useState(16);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 16);
  };

  return (
    <div className="min-w-[16%] border-r border-solid border-r-[#dcdcdc]">
      <nav>
        <h4 className="font-semibold text-base">Categories</h4>
        <ul className="flex flex-col font-light text-sm">
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
        )}
      </nav>
    </div>
  );
}

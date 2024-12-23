'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getCategories } from '@/data/loaders';
import { Category } from '@/types/category';

export default function Sidebar() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await getCategories();
      const { data } = response;
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <aside className="hidden lg:block lg:min-w-[16%] p-4">
      <nav>
        <h4 className="font-semibold text-base">Categories</h4>
        <ul className="flex flex-col font-light text-sm">
          {categories?.map((category) => (
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
      </nav>
    </aside>
  );
}

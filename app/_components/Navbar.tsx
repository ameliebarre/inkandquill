import { Category } from "@/types/Category";
import { dm_serif_text } from "../fonts";
import Link from "next/link";

export default function Navbar({ categories }: { categories: Category[] }) {
  const featuredCategories = categories.filter(
    (category: Category) => category.featured
  );

  return (
    <nav className="px-[52px]">
      <ul
        className={`${dm_serif_text.className} flex justify-between text-dark`}
      >
        <li className="pr-5">Books</li>
        <li className="text-[#af9d69]">||</li>
        {featuredCategories.map((category: Category) => (
          <li
            key={category.id}
            className={`hover:text-amber-400 flex-grow border-r border-r-[#af9d69] border-solid last:border-r-0 text-center`}
          >
            <Link href="categories/[slug]" as={`/categories/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

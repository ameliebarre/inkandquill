'use client';
import { useEffect, useState } from 'react';
import { getSimilarBooks } from '@/data/loaders';
import { BookCard } from './BookCard';
import { Book } from '../../types/book';
import { dm_serif_text } from '../fonts';

export default function YouMayAlsoLikedSection({ book }: { book: Book }) {
  const [similarBooks, setSimilarBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchSimilarBooks() {
      const response = await getSimilarBooks(book.id, book.categories);
      const { data } = response;
      setSimilarBooks(data);
    }
    fetchSimilarBooks();
  }, [book.categories, book.id]);

  return (
    <div className="flex flex-col gap-2 mt-8">
      <h2 className={`${dm_serif_text.className} text-lg`}>
        You May Also Like
      </h2>
      <div className="grid grid-cols-6 gap-3">
        {similarBooks?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

import { dm_serif_text } from '../fonts';

export default function Footer() {
  const categories = [
    {
      id: 1,
      label: 'Art',
    },
    {
      id: 2,
      label: 'Biography',
    },
    {
      id: 3,
      label: 'Business',
    },
    {
      id: 4,
      label: 'Children\'s',
    },
    {
      id: 5,
      label: 'Classics',
    },
    {
      id: 6,
      label: 'Comics',
    },
    {
      id: 7,
      label: 'Contemporary',
    },
    {
      id: 8,
      label: 'Cookbooks',
    },
    {
      id: 9,
      label: 'Crime',
    },
    {
      id: 10,
      label: 'Ebooks',
    },
    {
      id: 11,
      label: 'Fantasy',
    },
  ];

  const practicalInformations = [
    {
      id: 1,
      label: 'Who we are',
    },
    {
      id: 2,
      label: 'Terms and conditions',
    },
    {
      id: 3,
      label: 'Legal notice',
    },
    {
      id: 4,
      label: 'Personal data',
    },
    {
      id: 5,
      label: 'Manage my cookies',
    },
  ];

  return (
    <footer className="flex flex-col gap-y-6 bg-dark py-6 w-full px-[52px] text-white">
      <h1 className={`${dm_serif_text.className} text-lg`}>
        <Link href="/">
          Ink<span className="text-amber-400">&</span>Quill
        </Link>
      </h1>
      <div className="flex flex-row justify-between border-b-white border-b-solid border-b pb-8">
        <div className="flex flex-col flex-1 gap-y-2">
          <h4 className="text-sans text-md font-semibold">About us</h4>
          <p className="text-sm">
            260 Essex St, Salem, <br /> MA 01970, United States
          </p>
          <p className="text-sm">
            +00000000000 <br /> inkandquill@gmail.com
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-y-2">
          <h4 className="text-sans text-md font-semibold">
            Shop by categories
          </h4>
          <ul className="text-sm">
            {categories.map((category) => (
              <li key={category.id}>{category.label}</li>
            ))}
            <li>See all categories {'>'}</li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 gap-y-2">
          <h4 className="text-sans text-md font-semibold">
            Practical informations
          </h4>
          <ul className="text-sm gap-y-2">
            {practicalInformations.map((information) => (
              <li key={information.id}>{information.label}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col flex-1 gap-y-2">
          <h4 className="text-sans text-md font-semibold">Stay in the know</h4>
          <form className="w-full flex">
            <input
              className="p-2 text-dark focus:outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <button type="submit" className="bg-amber-400 px-4">
              <FaLongArrowAltRight fill="#2C2C2C" />
            </button>
          </form>
          <p className="text-xs">
            Submit your email address to receive Ink&Quill offers & updates. You
            can view Ink&Quill’s Privacy Policy here. Unsubscribe from our
            emails at any time.
          </p>
        </div>
      </div>
      <div className="flex text-xs justify-between">
        <div className="flex gap-x-4">
          <p>Terms of use</p>
          <p>Copyright & Trademark</p>
          <p>Your Privacy Choices</p>
          <p>Accessibility</p>
          <p>Cookie Policy</p>
          <p>Sitemap</p>
        </div>
        <p>©2021-2024 Ink&Quill</p>
      </div>
    </footer>
  );
}

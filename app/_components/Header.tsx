export default function Header() {
  return (
    <header className="px-[52px] py-9 flex items-center justify-between">
      <h1 className="text-2xl">
        Ink<span className="text-amber-400">&</span>Quill
      </h1>
      <form className="w-[668px] mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-sm text-gray-900 dark:text-white sr-only"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            placeholder="Search by Title, Author, Keyword or ISBN"
            required
          />
          <button
            type="submit"
            className="absolute end-2.5 bottom-2.5 px-4 py-2"
          >
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
        {/* <input
          className="border border-solid border-dark w-1/2"
          type="text"
          name="search"
        />
        <button type="submit">Submit</button> */}
      </form>
    </header>
  );
}

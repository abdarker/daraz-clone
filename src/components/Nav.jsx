const Nav = () => {
  return (
    <div className="flex items-center justify-around container mx-auto px-20  h-16 w-full">
      <div>
        <img
          src={
            "https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-42ab-b1f1-576042ab0412.png"
          }
          alt="Logo"
          className="h-10 "
        />
      </div>
      <div className="flex items-center gap-6">
        <div className="relative w-full">
          <input
            type="search"
            id="location-search"
            className="block p-2.5 w-[600px] z-20 bg-gray-200 text-lg text-gray-900     focus:ring-orange-500 focus:border-orange-500  "
            placeholder="Search in Daraz"
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 h-full p-2.5 text-lg font-medium text-white bg-orange-600  border hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 "
          >
            <svg
              className="w-4 h-4"
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
            <span className="sr-only">Search</span>
          </button>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
      <div>
        <img
          className="h-12"
          src="https://icms-image.slatic.net/images/ims-web/d998019b-9b34-44be-b747-1e6d5a892e2c.png"
        ></img>
      </div>
    </div>
  );
};

export default Nav;

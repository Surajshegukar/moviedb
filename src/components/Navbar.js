import React, { useEffect, useState } from "react";
import icon from "../assets/icon.png";
import { Link, useParams } from "react-router-dom";
import SystemContext from "../context/SystemContext";

function Navbar() {
  const { id } = useParams();
  const { searchMovies, fetchMovies, handleSearching, categories, reset } =
    React.useContext(SystemContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleSearch = (e) => {
    e.target.value.length === 0 ? fetchMovies() : searchMovies(e.target.value);
    e.target.value.length === 0
      ? handleSearching(false)
      : handleSearching(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (option) => {
    categories(option);
    setRefresh(!refresh);
    reset();
  };

  useEffect(() => {
    console.log("refresh");
    fetchMovies();
  }, [id, refresh]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={icon} className="h-8" alt="MovieDB Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MovieDB
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={toggleMenu}
            aria-controls="navbar-search"
            aria-expanded={isMenuOpen}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
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
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "" : "hidden"
          }`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
              <span className="sr-only">Search icon</span>
            </div>
            <input
              onChange={handleSearch}
              type="text"
              id="search-navbar-mobile"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
            {/* {search && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <ul className="p-2 overflow-y-scroll scroll-smooth h-80">
                  {movies.map((movie) => (
                    <li
                      key={movie.id}
                      className="text-white text-start flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Link onClick={() => setSearch(false)} to={`/movie/${movie.id}`}>
                        {movie.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                onClick={() => handleChange("top_rated")}
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Top Rated
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleChange("upcoming")}
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Upcoming
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleChange("popular")}
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Popular
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
          <span className="sr-only">Search icon</span>
        </div>
        <input
          onChange={handleSearch}
          type="text"
          id="search-navbar"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
        {/* {search && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <ul className="p-2 overflow-y-scroll scroll-smooth h-80">
              {movies.map((movie) => (
                <li
                  key={movie.id}
                  className="text-white text-start flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Link onClick={() => setSearch(false)} to={`/movie/${movie.id}`}>
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
    </nav>
  );
}

export default Navbar;

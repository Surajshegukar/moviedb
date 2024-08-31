import React, { useState } from "react";
import SystemContext from "./SystemContext";

const SystemState = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [category, setCategory] = useState("popular");
  const [isSearch, setIsSearch] = useState(false);

  function handleNext(totalPage) {
    if (currentPage === totalPage) return;
    setCurrentPage((prev) => prev + 1);
  }

  function handleSearching(ar) {
    setIsSearch(ar);
  }

  function handlePrev() {
    if (currentPage === 1) return;

    setCurrentPage((prev) => prev - 1);
  }

  function reset() {
    setCurrentPage(1);
  }
  const searchMovies = async (movie_name) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ede798186f006f1f65299cfb0a242732&language=en-US&query=${movie_name}&page=${currentPage}`
    );
    const data = await response.json();
    setMoviesList(data.results);
  };

  const categories = (option) => {
    setCategory(option);
  };

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?api_key=ede798186f006f1f65299cfb0a242732&language=en-US&page=${currentPage}`
    );
    const data = await response.json();
    setMoviesList(data.results);
    setPageInfo(data.total_pages);
    console.log(category);
  };

  return (
    <SystemContext.Provider
      value={{
        currentPage,
        category,
        categories,
        searchMovies,
        pageInfo,
        reset,
        fetchMovies,
        isSearch,
        handleSearching,
        moviesList,
        handlePrev,
        handleNext,
        setCurrentPage,
      }}
    >
      {props.children}
    </SystemContext.Provider>
  );
};

export default SystemState;

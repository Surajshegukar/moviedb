import React from 'react'
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Pagintaion from '../components/Pagintaion';
import { useContext } from 'react';
import SystemContext from '../context/SystemContext';

function UpcomingPage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const context = useContext(SystemContext);
    const {currentPage,reset} = context;
    const [totalPage, setTotalPage] = useState(0);


    const fetchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=ede798186f006f1f65299cfb0a242732&language=en-US&page=${currentPage}`);
        const data = await response.json();
        setMovies(data.results);
        setTotalPage(data.total_pages);
    }


    useEffect(() => {
        fetchMovies().then(() => {
            setIsLoading(false);
        }
        );
    }, [currentPage]);

  return (
    isLoading ? <Loading/> :
    <div>
        <h1>Upcoming Movies</h1>
        <div className="grid grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 md:grid-cols-2 md:gap-1 lg:grid-cols-4 sm:gap-5">
            {movies.map((movie) => (
                <Card movie = {movie} />
            ))}
            </div>
        <Pagintaion  totalPage = {totalPage}/>


    </div>
  )
}

export default UpcomingPage
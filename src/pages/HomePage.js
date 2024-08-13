import React from 'react'
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Pagintaion from '../components/Pagintaion';
import { useContext } from 'react';
import SystemContext from '../context/SystemContext';


function HomePage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const context = useContext(SystemContext);
    const {currentPage} = context;


    const [pageInfo,setPageInfo] = useState({})

    const fetchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ede798186f006f1f65299cfb0a242732&language=en-US&page=${currentPage}`);
        const data = await response.json();
        setPageInfo({
            totalPage:data.total_pages
        })
        setMovies(data.results);
    }

    useEffect(() => {
        fetchMovies().then(() => {
            setIsLoading(false);
        });
    }, [currentPage]);
  return (
    isLoading ? <Loading /> :
    <div>
        <div className="grid grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie) => (
                <Card movie = {movie} />
            ))}
            </div>
            <Pagintaion totalPage = {pageInfo.totalPage}/>
    </div>
  )
}

export default HomePage
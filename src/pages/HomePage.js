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
    const {currentPage,fetchMovies,moviesList,pageInfo,category} = context;

    

    useEffect(() => {
        fetchMovies().then(() => {
            setIsLoading(false);
        });
    }, [currentPage]);
  return (
    isLoading ? <Loading /> :
    <div>
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Movies</h1>
        <div className="mx-5 grid grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {moviesList.map((movie) => (
                <Card movie = {movie} />
            ))}
            </div>
            <Pagintaion totalPage = {pageInfo}/>
    </div>
  )
}

export default HomePage
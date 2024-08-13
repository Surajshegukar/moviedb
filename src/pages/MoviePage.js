import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loading from '../components/Loading';

function MoviePage() {
    const { id } = useParams();


    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState({});
    const fetchMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ede798186f006f1f65299cfb0a242732&language=en-US`);
        const data = await response.json();
        setMovie(data);
        return data;
    }
    const fetchCast = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=ede798186f006f1f65299cfb0a242732&language=en-US`);
        const data = await response.json();
        setCast(data);
        return data;
    }

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchMovie().then(() => {
            setIsLoading(false);
        });
        fetchCast();

    }, [id]);

    return (

        isLoading ? loading() :
        <div class="text-white">
            <div class="container mx-auto p-4">
                <div class="bg-gray-800 rounded-lg backdrop:10 shadow-lg overflow-hidden flex flex-col md:flex-row">
 
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={"15%"} height={"10%"} alt="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" class="object-cover" />
                    
                    <div class="p-6 flex-1 text-left">
                        <h1 class="text-2xl md:text-3xl font-bold">{movie.title}</h1>
                        <p class="text-blue-400 text-lg mt-2">Rating: {movie.vote_average}</p>


                        <p class="text-gray-400 flex items-center mt-2"><span class="mr-2">97 min</span> | <span class="ml-2">Science Fiction, Action, Adventure</span></p>
                        <p class=" text-gray-400 mt-2">Release Date: Thu Sep 30 2021</p>


                        <h2 class="text-xl font-semibold mt-6">Overview</h2>
                        <p class="mt-2 text-gray-300">
                            After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.
                        </p>
                    </div>


                    <div class="relative overflow-hidden backdrop:10 text-gray-700 bg-white bg-clip-border rounded-xl ">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="No Image Found" class="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
            <h1 class="text-2xl text-black text-start mx-6 md:text-3xl font-bold mt-8">Cast</h1>
            <div className="bg-gray-600 rounded-lg backdrop:10 shadow-lg mx-4 ">
                
                <div className="p-4 grid grid-cols-1 gap-2 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        cast.cast?.map((actor) => (
                            <div className="flex flex-col items-center my-2">
                                {actor.profile_path === null ? <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" alt="No Image Found" class="object-cover w-40 h-40 rounded-full" />
                                :
                                <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="No Image Found" class="object-cover w-40 h-40 rounded-full" />
                                }
                                <p>{actor.name}</p>
                                <p>Character : {actor.character}</p>
                    </div>
                    
                        ))
                    }
                    
                </div>
            </div>



        </div>
    )
}

export default MoviePage
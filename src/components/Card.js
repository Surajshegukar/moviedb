import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
    const { movie } = props;
  return (
    
            <div key={movie.id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">

                <Link to={`/movie/${movie.id}`}>

                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-60">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="object-cover w-full h-full"
                />
                </div>
                <div className="p-6">
                <div className="flex-row mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {movie.title}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    Rating : {movie.vote_average}
                    </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    {movie.overview.slice(0, 100) + "..."} 
                </p>
                </div>
                </Link>
            </div>
            
  );
}

export default Card;

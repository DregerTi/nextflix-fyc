"use client";

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import MovieCard from "./MovieCard.jsx";
import {useRef} from "react";

const MovieCardList = ({ movies }) => {
  const listRef = useRef(null);

  const scrollLeft = () => {
    if (listRef.current){
      listRef.current.scrollBy(
        {
          left: -200,
          behavior: "smooth",
        }
      )
    }
  }

  const scrollRight = () => {
    if (listRef.current){
      listRef.current.scrollBy(
        {
          left: 400,
          behavior: "smooth",
        }
      )
    }
  }

  return (
    <div className="relative w-full">
      <button aria-label={'Previous movies'} onClick={scrollLeft} className="absolute top-1/2 left-4 transform -translate-y-1/2 backdrop-blur-lg hover:bg-gray-600 hover:opacity-90 transition-all rounded-full p-4 max-sm:p-2 shadow-lg z-10">
        <AiFillCaretLeft className="text-3xl text-blue-400 max-sm:text-2xl" />
      </button>
      <div className="flex overflow-x-auto scrollbar-hide py-10 px-5 max-sm:px-4" ref={listRef}>
        {movies.map((movie, index) => (
          <MovieCard key={index} posterUrl={movie.poster_path} id={movie.id} backdrop_path={movie.backdrop_path} title={movie.title} />
        ))}
      </div>
      <button aria-label={'Previous movies'} onClick={scrollRight} className="absolute top-1/2 right-4 transform -translate-y-1/2 backdrop-blur-lg hover:bg-gray-600 hover:opacity-90 transition-all rounded-full p-4 max-sm:p-2 shadow-lg z-10">
        <AiFillCaretRight className="text-3xl text-blue-400 max-sm:text-2xl" />
      </button>
    </div>
  );
};

export default MovieCardList;
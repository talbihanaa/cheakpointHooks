
import React from 'react';
import MovieCard from './movieCard';

const MovieList = ({ film }) => {
  console.log(film);
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:'space-between'}}>
      {film.map((movie,index) => (
        <MovieCard film={movie} key={index} />
      ))}
    </div>
  );
};

export default MovieList;
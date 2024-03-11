
import React from 'react';
import MovieCard from './movieCard';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <MovieCard
          
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;
import React, { useState } from 'react';
import MovieList from './component/movieList';
import Filter from './component/filter';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: 0 });
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  
  const AddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };

  return (
    <div style={{ fontFamily: 'Arial', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h1 style={{ color: 'blue' }}>My Movie App</h1>
      
      <input type="text" placeholder="Title" value={newMovie.title} onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
      <input type="text" placeholder="Description" value={newMovie.description} onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
      <input type="text" placeholder="Poster URL" value={newMovie.posterURL} onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })} />
      <input type="number" placeholder="Rating" value={newMovie.rating} onChange={(e) => setNewMovie({ ...newMovie, rating: parseInt(e.target.value) })} />
      
      <button onClick={AddMovie}>Add Movie</button>

      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        
        TitleChange={(e) => setTitleFilter(e.target.value)}
        RatingChange={(e) => setRatingFilter(parseInt(e.target.value))}
        
      />

      <MovieList movies={movies.filter(movie =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        movie.rating >= ratingFilter
      )} />
    </div>
  );
};

export default App;
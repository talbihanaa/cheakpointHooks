import React, { useState } from 'react';
import MovieList from './component/movieList';

import Filter from './component/filter';
import './App.css';
import MovieData from './component/movieData';
import{Routes, Route} from 'react-router-dom';
import MovieDetails from './component/movieDetails';
import Details from './component/movieDetails';
import {films} from './component/movieData';



const App = () => {
  const [movies, setMovies] = useState(films);
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: 0 });
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const AddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };

  
  
  
 
  return (
    <div style={{ fontFamily: 'Arial', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h1 style={{ color: '#6d6e70' }}>My Movie App</h1>
      
      <input style={{border:"2px solid #6d6e70" ,margin:10}} type="text" placeholder="Title" value={newMovie.title} onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
      <input style={{border:"2px solid #6d6e70" , margin:10}} type="text" placeholder="Description" value={newMovie.description} onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
      <input style={{border:"2px solid #6d6e70" ,margin:10}} type="text" placeholder="Poster URL" value={newMovie.posterURL} onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })} />
      <input style={{border:"2px solid #6d6e70" ,margin:10}} type="number" placeholder="Rating" value={newMovie.rating} onChange={(e) => setNewMovie({ ...newMovie, rating: parseInt(e.target.value) })} />
      
      <button onClick={AddMovie} style={{background:"#00aeff", color:"white", borderRadius:5 , cursor: "pointer",}}>Add Movie</button>

      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        
        TitleChange={(e) => setTitleFilter(e.target.value)}
        RatingChange={(e) => setRatingFilter(parseInt(e.target.value))}
        
      />

      {/* <MovieList movies={movies.filter(movie =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        movie.rating >= ratingFilter
      )} /> */}
      <Routes>
  <Route path='/' element={ <MovieList film={movies}/>}/>
  <Route path='/details/:id' element={<Details film={movies}/>}/>
   </Routes>
   

    </div>
  );
};

export default App;
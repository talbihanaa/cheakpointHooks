
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';




// const MovieCard = ({title, description, posterURL, rating}) => {
  const MovieCard = ({film})=>{

    const navigate = useNavigate();
  
  return (
   
   
    <div className="card">
      
      <img className="img" src={film.posterURL} width={300} height={200}/>
      
     
      <h1>{film.title}</h1>
    
    <p>{film.description}</p>
    <h3>{film.rating}</h3>
    <button onClick={()=>navigate(`/details/${film.id}`)}> see more detail</button>
    
    </div>
  );
  };


export default MovieCard;
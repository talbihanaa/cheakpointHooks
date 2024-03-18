
import React, { useState } from 'react';

const Filter = ()=>{
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  
  return (
    <div className="filter">
      <input style={{border:"2px solid #6d6e70", marginTop:10, margin:10}} type="text" placeholder="Filter by title" value={title} onChange={(event)=>setTitle(event.target.value)} />
      <input style={{border:"2px solid #6d6e70"}} type="number" placeholder="Filter by rating" value={rating} onChange={(event)=>setRating(event.target.value)} />
      </div>
  );
};

export default Filter;
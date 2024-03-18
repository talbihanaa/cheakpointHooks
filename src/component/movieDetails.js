
import {useNavigate, useParams} from 'react-router-dom';



const Details = ({film }) => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);
  let singleMovie = film.find((item)=> item.id === Number(params.id))
  return (
     <div>
      <button onClick={()=>navigate('/')}>back home</button>
      <h1>Description : {singleMovie.description}</h1>
      <iframe src={singleMovie.film}></iframe>
     </div>
  )
};

export default Details;
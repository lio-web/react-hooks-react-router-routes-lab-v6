import React,{useEffect,useState} from "react";
// import { movies } from "/Actors.js";
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar";



function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams();
  const movieId = params.id

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error))
  }, [movieId])

  if(!movie.title){
    return <h1>Loading...</h1>
  }

  const genres = movie.genres.map(genre => <span key={genre}>{genre}</span>)

  return (
    <>
      <header>
      
        <NavBar />
      </header>
      <main>
      
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {genres}
      </main>
    </>
  );
};



export default Movie;



// function Movies() {
  
//   return <div>
//     <h1>Movies Page</h1>
//     {movies.map((movie, index) => (
//         <div key={index}>
//           <h3>Title: {movie.title}</h3>
//           <p>Time: {movie.time}</p>
//           <ul>
//             {movie.genres.map((genre, genreIndex) => (
//               <li key={genreIndex}>{genre}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>;
// }

// export default Movies;
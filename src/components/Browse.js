import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import movies from "../data/movies.json";
import MainContainer from './MainContainer';

const Browse = () => {
     const dispatch=useDispatch() ;

    // const getNowPlayingMovies= async()=>{
    //     const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    //     const json =await data.json();
    //     console.log(json);  
    //     dispatch(addNowPlayingMovies(json.results));
    // }

// useEffect(()=>{
//     getNowPlayingMovies();
// },[])

useEffect(()=>{
    dispatch(addNowPlayingMovies(movies.popular))
   // dispatch(addNowPlayingMovies(movies.now_playing))
    
},[dispatch])

  return (
    <div className='bg-black cursor-pointer' >
      <Header></Header>
     <MainContainer></MainContainer>
       
    <div className="px-6 py-10 ">
      {Object.entries(movies).map(([category, list]) => (
        <div key={category} className="mb-10">
          <h1 className="text-3xl font-bold capitalize mb-4 text-white">
            {category.replace(/_/g, " ")}
          </h1>

          <div className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory ">
            {list.map((movie) => (
              <div key={movie.id} className=" min-w-[300px] max-w-[220px] bg-gray-900 rounded-lg flex-shrink-0 hover:scale-105 transition-transform duration-300 ease-out cursor-pointer snap-start shadow-md hover:shadow-xl">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="rounded-md w-full h-[350px] object-cover"
                />

                <h2 className="text-blue-200 mt-2 text-xl font-semibold line-clamp-1 ">{movie.title}</h2>

                <p className='text-md text-blue-200 line-clamp-2 mt-1'>{movie.overview}</p>

                <p className='text-sm mt-1 italic text-gray-300'>{movie.genre}</p>

                <div className="flex justify-between text-xs mt-2 text-amber-100">
                 <p>{movie.release_year}</p>
                 <p>{movie.rating} ⭐</p>
                </div>

                <p className='text-md mt-1 text-gray-400'> Duration:{" "}
                {(() => {
                const hours = Math.floor(movie.duration / 60);
                const minutes = Math.round(movie.duration % 60);
                return `${hours}hr ${minutes}min`;
                })()} 
                 </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
      
    </div>
  )
}

export default Browse

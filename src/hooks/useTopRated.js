import { useDispatch, useSelector } from "react-redux";
import { addTopRatedrMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
const useTopRated = () =>{
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(store=> store.movies.topRatedMovies)

  const getTopRatedMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
  
  const json = await data.json();
  console.log(json);
  dispatch(addTopRatedrMovies(json.results))
  };
  useEffect(()=>{
    !topRatedMovies && getTopRatedMovies();
  },[])
}

export default useTopRated;
import './App.css';
import {useEffect,useState} from "react";
import Movie from "./Movie";
import Filter from './Filter';
import Footer from "./Footer";
import {motion,AnimatePresence} from "framer-motion";
import Intro from './Intro';

function App() {

  const [popular,setPopular] = useState([]);
  const [filtered,setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(()=>{
    fetchPopular();
  },[]);

  const fetchPopular = async () =>{

    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b43948e40e6bbfed4cc96a4c1aadcfb7&language=en-US&page=1');

    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  }

  return (
    <div className="App">
      <Intro />
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
     <motion.div layout className="popular-movies">
       <AnimatePresence>
       {filtered.map(movie =>{
         return <Movie key={movie.id} movie={movie} />
       })}
       </AnimatePresence>
     </motion.div>
     <Footer/>
    </div>
  );
}

export default App;

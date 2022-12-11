import "./App.css"
import { getMovieList, searchMovie} from "./api"
import { useEffect, useState } from "react"

const App = () => {
  const [PopularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const PopularMovieList = () => {
    return PopularMovies.map((movie, i) => {
      return (
          <div className='Movie-wrapper'key={i}>
            <div className='Movie-title'>{movie.title}</div>
              <img 
              className='Movie-image' 
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
                <div className='Movie-date'>{movie.release_date}</div>
                  <div className='Movie-rate'>{movie.vote_average}</div>    
        </div>
      )
    })
  }

  const search = async (q) => {
    const query = await searchMovie(q)
    console.log ({ query: query })
  }

  console.log({PopularMovies: PopularMovies})
  return (
    <div className="App">
      <header className="App-header">
        <h1>U SEE NEMA V2</h1>
        <input 
          placeholder='search movie...' 
          className='Movie-search'
          onChange={({target}) => search(target.value)} 
          />
        <div className='Movie-container'>
          <PopularMovieList/>
          </div>
      </header>
    </div>
  );
}

export default App;

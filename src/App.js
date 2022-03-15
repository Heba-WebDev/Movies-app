import React from 'react';
import './App.css';
import Hero from './Components/Hero'
import Header from './Components/Header'
import Main from './Components/Main'


function App() {

  const [trending, SetTrending] = React.useState([]);
  const [mainMovie, setMainMovie] = React.useState([]);
 


  React.useEffect( async () => {
    await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=e00d19ac91253e96984de28cdf1c4370')
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      setMainMovie(data.results.slice(0,1))
      SetTrending(data.results.slice(1,9))
      
    })
    .catch(error => console.log(error))
  },[])




  return (
    <div className="app">
    <Header />
   
    <main>

   {mainMovie.map((movie) => {
     return (
       <Main 
       key={movie.id}
       title={movie.title}
       overview={movie.overview}
       vote_average={movie.vote_average}
       id={movie.id}
       backdrop_path={movie.backdrop_path}
       />
     )
   })}
  
    <p className='trending'>Trending</p>
   <div className='hero-wrapper'>
 
 {trending.map((movie) => { 
     return (
        <Hero 
        key={movie.id}
        id={movie.id}
        vote_average={movie.vote_average}
        poster_path={movie.poster_path}
         />
        )})}
</div>
  
   </main>

    </div>
  );
}

export default App;

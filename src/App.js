import React from 'react';
import './App.css';
import Hero from './Components/Hero'
import Header from './Components/Header'

function App() {

  const [trending, SetTrending] = React.useState([]);

  React.useEffect( async () => {
    await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=e00d19ac91253e96984de28cdf1c4370')
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      SetTrending(data.results.slice(0,8))
      
    })
    .catch(error => console.log(error))
  },[])




  return (
    <div className="app">
    <Header />
   
    <main>

  
 
<div className='hero-wrapper'>
 {trending.map((movie) => { 
     return (
        <Hero 
        key={movie.id}
        id={movie.id}
        poster_path={movie.poster_path}
         />
        )})}
</div>
  
   </main>

    </div>
  );
}

export default App;

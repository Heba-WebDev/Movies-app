import React from 'react';
import './App.css';
import {SiThemoviedatabase} from 'react-icons/si'
import {BiSearchAlt} from 'react-icons/bi'
import Hero from './Components/Hero'

function App() {

  const [trending, SetTrending] = React.useState([]);

  React.useEffect( async () => {
    await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=e00d19ac91253e96984de28cdf1c4370')
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      SetTrending(data.results)
      
    })
    .catch(error => console.log(error))
  },[])

  // const loadData = async () => {
  // await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=e00d19ac91253e96984de28cdf1c4370')
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data.results);
  //   SetTrending(data)
  // })
  // .catch(error => console.error("error"))
  // };




  return (
    <div className="app">


    <header>
    <SiThemoviedatabase className='icon'/>
    <div className='search'>
      <BiSearchAlt className='search-icon'/>
      <input type="text" placeholder='Search'></input>
    </div>
    </header>

   <main>

  
 <p>Trending</p>

 {trending.map((movie) => { 
                 return (
                    <div className="mainheadline-wrapper" key={movie.id}>

                    
                   
                    <h2 className="headline-title">{movie.title}</h2>
                    
                    
                  
                    </div>
                 )
             
             })}

  
   </main>

    </div>
  );
}

export default App;

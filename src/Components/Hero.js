import React from "react";

export default function Hero(props) {
  //const imagePath = "https://image.tmdb.org/t/p/w500/";
   
return (
  <div className="movie-wrapper" key={props.id}>

  <big className="rating">{props.vote_average}</big>
  <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} className="movie-poster" />

  </div>

)}
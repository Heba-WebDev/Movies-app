import React from "react";

export default function Main(props) {

    return (
        <div className="main-wrapper" key={props.id}>
  <div className="main-details">
      <h1 className="main-title">{props.title}</h1>
  </div>
  <img src={`https://image.tmdb.org/t/p/original/${props.backdrop_path}`} className="main-poster" />

  </div>
    )
}
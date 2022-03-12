import React from "react";

export default function Hero({hero}) {
  //const imagePath = "https://image.tmdb.org/t/p/w500/";
    return(
        <div className="trending-movie">
         <h2>{hero.title}</h2>
        </div>
    )
}
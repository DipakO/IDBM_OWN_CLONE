import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Ratting from "../Ratting";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
  }, []);

  console.log(movieDetails);

  return (
    <div>
      <div style={{ float: "right", width: "34rem", textAlign: "start" }}>
        <h1 style={{ color: "red", marginRight: "8rem" }}>Movies Details</h1>
        <h1 style={{ color: "wheat" }}># Movie Name:- {movieDetails.title}</h1>
        <p style={{ color: "Highlight" }}>
          Description :- {movieDetails.overview}
        </p>
        <small style={{ color: "ButtonHighlight" }}>
          Release Date :- {movieDetails.release_date}
        </small>
        <p style={{ color: "yellow" }}>
          <Ratting rating={movieDetails.vote_average} />
        </p>

        {movieDetails.genres?.map((type, index) => {
          if (type)
            return (
              <button
                style={{ backgroundColor: "yellow" }}
                className="movieTypeBtn"
              >
                {type.name}
              </button>
            );
        })}

        <a className="MovieLink" target="_blank" href={movieDetails.homepage}>
          {" "}
          Watch movie here
        </a>

        <p className="pLang">Available Langauge :-</p>

        {movieDetails.spoken_languages?.map((lang, i) => {
          return (
            <p
              style={{
                color: "white",
                lineHeight: 0,
                position: "relative",
                left: "11rem",
                bottom: "1.8rem",
                width: "10rem",
              }}
            >
              {lang.english_name}
            </p>
          );
        })}
      </div>
      <img
        className="BackImage"
        src={`http://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
        alt=""
        width={600}
      />
      <img
        className="singleMovieImage"
        src={`http://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
        alt=""
        width={250}
      />
    </div>
  );
};

export default MovieDetails;

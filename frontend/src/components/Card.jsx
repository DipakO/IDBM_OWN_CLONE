import React from "react";
import "./Card.css";
import Ratting from "./Ratting";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Card = ({ movie, toprate }) => {
  const Navigate = useNavigate();
  const handlClick = () => {
    Navigate(`/movies_details/${toprate.id}`);
  };
  const Controller = useAnimation();

  useEffect(() => {
    Controller.start({
      // borderRadius: "30%",
      transition: { duration: 1.3 },
    });
  }, []);
  return (
    <div>
      <motion.div
        // whileHover={{ scale: 0.7, rotate: 360 }}
        whileHover={{ scale: 0.9 }}
        layout
        animate={{
          opacity: 1,
          transition: { duration: 2, dumping: 10 },
          y: "0vw",
        }}
        initial={{ opacity: 0, y: -1000 }}
        exit={{ opacity: 0 }}
        className="card"
      >
        <motion.img
          animate={Controller}
          onClick={handlClick}
          className="img"
          style={{ width: "17rem" }}
          src={`http://image.tmdb.org/t/p/original${
            movie ? movie.poster_path : toprate.poster_path
          }`}
          alt="moviename"
          width={200}
        />
        <h3 style={{ color: "blue", textAlign: "center" }}>
          {movie ? movie.title : toprate.title}
        </h3>
        <p style={{ color: "yellow" }}>
          {" "}
          Ratting :-
          <Ratting
            rating={movie ? movie.vote_average : toprate.vote_average}
          />{" "}
        </p>
        <small>
          Release by :- {movie ? movie.release_date : toprate.release_date}
        </small>
      </motion.div>
    </div>
  );
};

export default Card;

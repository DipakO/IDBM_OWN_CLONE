import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./TopRated.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Comedy = () => {
  const [toprated, setTopRated] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [text, setText] = useState("top_rated");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${text}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setTopRated(data.results));
  }, [text]);

  // console.log(text);
  return (
    <>
      <motion.div
        layout
        animate={{
          opacity: 1,
          transition: { duration: 2, dumping: 10 },
          y: "0vw",
        }}
        initial={{ opacity: 0, y: -1000 }}
        exit={{ opacity: 0 }}
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          className="typeButton"
          style={{
            backgroundColor: "red",
          }}
          onClick={() => setText("popular")}
        >
          popular
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          className="typeButton"
          style={{
            backgroundColor: "yellow",
          }}
          onClick={() => setText("top_rated")}
        >
          Top_Rated
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          className="typeButton"
          style={{
            backgroundColor: "aqua",
          }}
          onClick={() => setText("upcoming")}
        >
          upComing
        </motion.button>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ marginTop: "1.5rem" }}
          >
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                backgroundColor: "blueviolet",
                padding: "17px",
                borderRadius: "40px",
                textAlign: "center",
              }}
              to="/"
            >
              Back To Home Page
            </Link>
          </motion.div>
          <input
            style={{ width: "20rem" }}
            onChange={(e) => setSearchText(e.target.value)}
            type="search"
            className="filterTopRate"
            placeholder="Search Here ...!"
            id="Search"
          />
          <h1 style={{ color: "Highlight" }}>Top Rated Movies</h1>
        </div>
        s
        <div className="mainCard">
          {toprated
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((toprate, index) => {
              return <Card toprate={toprate} key={index} />;
            })}
        </div>
      </motion.div>
    </>
  );
};

export default Comedy;

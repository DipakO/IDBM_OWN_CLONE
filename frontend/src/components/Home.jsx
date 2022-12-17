import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Zoom,
  Slide,
  Switch,
  FormControlLabel,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Menu,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HelpIcon from "@mui/icons-material/Help";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import SettingsIcon from "@mui/icons-material/Settings";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Card from "./Card";

const Home = ({ ChangePage }) => {
  const [movies, setMovies] = useState([]);
  const [checked, setChecked] = React.useState(false);
  const [text, setText] = useState("");
  const [anchor, setAnchor] = useState(null);
  const [option, setOption] = useState("");
  const open = Boolean(anchor);

  const handleEvent = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  console.log(option);
  return (
    <div>
      <div className="header">
        <button className="homebtn">
          <HomeIcon style={{ color: "white" }} className="Homeicon"></HomeIcon>
        </button>
        <div id="head">
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              width: "20rem",
            }}
          >
            <button
              style={{
                backgroundColor: "rgb(26,26,36)",
                border: "none",
                borderRadius: "10px",
                color: "white",
                padding: "5px",
              }}
            >
              {" "}
              <AccountBalanceWalletIcon
                style={{ color: "white" }}
              ></AccountBalanceWalletIcon>{" "}
              Add to Wallets
            </button>
            | <HelpIcon></HelpIcon> |<SettingsIcon></SettingsIcon>
          </div>
        </div>
      </div>
      <div className="body" style={{ color: "white" }}>
        <div
          className="bodyHead"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <h1
            style={{ color: "hotpink", marginTop: "0px" }}
            className="spinner-grow  card"
          >
            IDBM Clone...!
          </h1>
          <input
            type="search"
            placeholder="SEARCH THE MOVIES HERE...."
            onChange={(e) => {
              setText(e.target.value);
            }}
            style={{
              width: "20rem",
              height: "2.8rem",
              outline: "none",
              borderRadius: "10px",
              marginTop: "5px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "20rem",
            }}
          >
            <div>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.7 }}
                style={{
                  backgroundColor: "rgb(177,105,247)",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "none",
                  marginTop: "5px",
                }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleEvent}
              >
                {" "}
                <DownloadIcon></DownloadIcon> Download Video
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <Carousel
        className="slide"
        showThumbs={false}
        autoPlay={true}
        transitionTime={10}
        infiniteLoop={true}
        showStatus={false}
      >
        {movies.map((movie, index) => {
          return (
            <div>
              <div className="posterImage">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 3 } }}
                  src={`http://image.tmdb.org/t/p/original${
                    movie ? movie.poster_path : ""
                  }`}
                  alt="moviename"
                  // width={200}
                />
              </div>
              <div className="posterImage_overlay">
                <div className="posterImage_title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage_runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage_rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage_description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <h2
        style={{ color: "yellow", marginTop: "0px", width: "20rem" }}
        className="spinner-grow  card"
      >
        See Popular Movies...!
      </h2>

      <div>
        {/* <button
          style={{
            backgroundColor: "deepskyblue",
            border: "none",
            padding: "10px",
            borderRadius: "20px",
            color: "white",
          }}
          onClick={() => ChangePage(3)}
        >
        </button> */}
        <div style={{ display: "flex" }}>
          <motion.div
            style={{ marginTop: "1rem" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.7 }}
          >
            <Link
              style={{
                backgroundColor: "deepskyblue",
                border: "none",
                padding: "10px",
                borderRadius: "20px",
                color: "white",
                textDecoration: "none",
              }}
              to="/top_rated"
            >
              {" "}
              <VisibilityIcon></VisibilityIcon>
              View Other Movies
            </Link>
          </motion.div>
          <FormControlLabel
            style={{
              color: "red",
              fontSize: "50em",
              marginLeft: "4rem",
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "5px",
            }}
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show The Popular Movies...!"
          />
        </div>
        {/* <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "500ms" : "0ms" }}
        >
          <div className="mainCard">
            {movies
              .filter((moviesData) => {
                if (text === "") {
                  return moviesData;
                } else if (
                  moviesData.title.toLowerCase().includes(text.toLowerCase())
                ) {
                  return moviesData;
                } else if (moviesData.vote_average > +text) {
                  return moviesData;
                }
              })
              .map((movie, index) => {
                return <Card movie={movie} />;
              })}
          </div>
        </Zoom> */}

        <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
          <div className="mainCard">
            {movies
              .filter((moviesData) => {
                if (text === "") {
                  return moviesData;
                } else if (
                  moviesData.title.toLowerCase().includes(text.toLowerCase())
                ) {
                  return moviesData;
                } else if (moviesData.vote_average > +text) {
                  return moviesData;
                }
              })
              .map((movie, index) => {
                return <Card movie={movie} />;
              })}
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Home;

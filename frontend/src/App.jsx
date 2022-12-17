import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Comedy from "./components/MoviesType/TopRated";
import Login from "./page/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  let once = false;
  const host = "http://localhost:3000";

  const [page, setPage] = useState(3);

  function handleLoginPage() {
    setPage(0);
  }
  const ChangePage = (pNo) => {
    // console.log(pNo);
    setPage(pNo);
  };

  function handleSignUpPage() {
    setPage(1);
  }

  const FuncForTopRated = (pNumber) => {
    setPage(pNumber);
  };

  async function authToken() {
    const token = window.localStorage.getItem("token");
    const res = await fetch(`${host}/`, {
      headers: new Headers({ authorization: token }),
    });
    console.log("authToken: ", res.status);

    if (res.status === 200) {
      // Will set the page -> Home page
      setPage(2);
    } else {
      // Will set the page -> Login page
      setPage(0);
    }
  }

  useEffect(() => {
    if (!once) {
      authToken();

      once = true;
    }
  }, []);

  async function handleLogin({ username, password }) {
    console.log({ username, password });
    if (username.length > 0 && password.length > 0) {
      const res = await fetch(`${host}/login`, {
        method: "POST",
        body: JSON.stringify({ username, password, type: "login" }),
      });

      if (res.status !== 200) {
        console.log("Login failed!");
        return;
      }

      const token = (await res.json()).token;
      console.log({ token });
      window.localStorage.setItem("token", token);

      console.log("Login successful");

      authToken();
    }
  }

  async function handleSignUp({ username, password, conpassword, email }) {
    if (
      username.length > 0 &&
      password.length > 0 &&
      email.length > 0 &&
      conpassword.length > 0 &&
      conpassword === password
    ) {
      const payload = { username, password, email, type: "signup" };
      const res = await fetch(`${host}/login`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      if (res.status !== 200) {
        console.log("Failed to save the data");
        return;
      }
      console.log("data has been saved");
    }
  }

  return (
    <>
      {(page === 0 || page === 1) && (
        <Login
          page={page}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          handleLoginPage={handleLoginPage}
          handleSignUpPage={handleSignUpPage}
        />
      )}

      {/* {page === 2 && (
        <div>
          <Home ChangePage={ChangePage} /> */}

      {/* <button onClick={() => { window.localStorage.setItem('token', null); authToken(); }} >logout</button> */}
      {/* </div>
      )} */}
      {/* {page === 3 && (
        <div>
          <Comedy FuncForTopRated={FuncForTopRated} />
        </div>
      )} */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top_rated" element={<Comedy />} />
          <Route path="/movies_details/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

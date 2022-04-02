import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./component/Login";
import Resister from "./component/Resister";
import Home from "./component/Home";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./redux/action";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import About from "./component/About";
import PasswordReset from "./component/PasswordReset";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(setUser(auth));
        // console.log("state changed invoked")
        // console.log(authUser)
      } else {
        dispatch(setUser(null));
        // console.log("state changed invoked error")
      }
    });
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <div className="field">
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/resister" element={<Resister />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/main" element={<Main />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/PasswordReset"
              element={<PasswordReset />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue} from "./StateProvider";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyBPJWIX4vHeTJRjChak7QtWhPiT6ncsxdg",
//   authDomain: "fir-4f468.firebaseapp.com",
//   projectId: "fir-4f468",
//   storageBucket: "fir-4f468.appspot.com",
//   messagingSenderId: "773410657477",
//   appId: "1:773410657477:web:387b461aa4b832f0e80cac",
//   measurementId: "G-WWBBWM7G2S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <Login />
              </div>
            }
          />

          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


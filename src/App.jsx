import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "./Results";
import Header from "./Header";
import UploadImages from "./UploadImages";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/UploadImages"
            element={
              <>
                <Header />
                <UploadImages />
              </>
            }
          ></Route>
          <Route
            path="/Results"
            element={
              <>
                <Header />
                <Results />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "./Results";
import Header from "./Header";
import UploadImages from "./UploadImages";
import MoreResults from "./MoreResults";
import FAQ from "./FAQ";
import Blog from "./Blog";

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
          <Route
            path="/MoreResults"
            element={
              <>
                <Header />
                <MoreResults />
              </>
            }
          ></Route>
          <Route
            path="/FAQ"
            element={
              <>
                <Header />
                <FAQ />
              </>
            }
          ></Route>
          <Route
            path="/Blog"
            element={
              <>
                <Header />
                <Blog />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

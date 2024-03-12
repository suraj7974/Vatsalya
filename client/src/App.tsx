import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "./Results";
import Navbar from "./navbar";
import UploadImages from "./UploadImages";
import MoreResults from "./MoreResults";
import FAQ from "./FAQ";
import Blog from "./Blog";
import Dashboard from "./dashboard";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          ></Route>
          <Route
            path="/UploadImages"
            element={<UploadImages />}
          ></Route>
          <Route
            path="/Results"
            element={<Results />}
          ></Route>
          <Route
            path="/MoreResults"
            element={<MoreResults />}
          ></Route>
          <Route
            path="/FAQ"
            element={<FAQ />}
          ></Route>
          <Route
            path="/Blog"
            element={<Blog />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

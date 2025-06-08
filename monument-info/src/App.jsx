import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Home from "./pages/home";
import Explore from "./pages/explore";
import About from "./pages/about";
import "./App.css";

function App() {
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async (query) => {
    try {
      const res = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();

      if (data.title && data.extract) {
        setSearchResult({
          title: data.title,
          image:
            data.thumbnail?.source ||
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
          description: data.extract,
        });
      } else {
        setSearchResult({ title: "Not Found", description: "data not found." });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setSearchResult({ title: "Error", description: "Data can't be fetched." });
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <SearchBar onSearch={handleSearch} />

          {searchResult && (
            <div className="search-result">
              <h2>{searchResult.title}</h2>
              <img
                src={searchResult.image}
                alt={searchResult.title}
                style={{ width: "300px", borderRadius: "10px", margin: "20px" }}
              />
              <p style={{ maxWidth: "600px", margin: "auto" }}>
                {searchResult.description}
              </p>
            </div>
          )}

          <Routes>
            <Route path="/" element={<Home onCardClick={handleSearch} />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <footer className="footer">
          <p>Made by Hardik Yadav</p>
          <p>© 2025 Monument Info. All rights reserved.</p>
          <div className="social-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

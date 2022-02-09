import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import './App.css';

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleList from "./pages/ArticleList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/article' element={<ArticlePage />} />
          <Route exact path='/article-list' element={<ArticleList />} />
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

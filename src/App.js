import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import './App.css';

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleListPage from "./pages/ArticleListPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/article-list' element={<ArticleListPage />} />
          <Route exact path='/article/:name' element={<ArticlePage />} />
          <Route exact path='/' element={<Navigate to='/home' />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

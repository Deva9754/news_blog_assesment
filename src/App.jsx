// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import ArticleDetails from "./components/ArticleDetails";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";


function App() {
  
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/article/:title" element={<ArticleDetails/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;









import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/home';
import About from './pages/about';
import SingleCocktail from './pages/singleCocktail';
import Error from './pages/error';
import './App.css';

// import components
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

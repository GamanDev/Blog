import React from 'react';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Details from './Components/Details';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import HomePage from '../src/pages/home'; // Import your homepage component
import DetailPage from './pages/details';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

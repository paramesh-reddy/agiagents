import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import HomePage from '../src/pages/home'; // Import your homepage component
import DetailPage from './pages/details';
import Footer from './components/footer/Footer';
import SubmitPage from './components/form/Form';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/detail" element={<DetailPage />}/>
          <Route path="/submit" element={<SubmitPage/>} />
        </Routes>
      {/* <SubmitPage/> */}
        <Footer/>
       
      </div>
    </Router>
  );
}

export default App;

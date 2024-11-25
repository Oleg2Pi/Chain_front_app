import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkPage from "./pages/Other/WorkPage";
import Footer from "./components/Footer";

import './styles/homePage/general.css';

const App = () => {
  return (
    <div>
      <Routes>  
        <Route path="/" element={<HomePage />} /> 
        <Route path="/profile/:id/work/:id" element={<WorkPage /> }/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
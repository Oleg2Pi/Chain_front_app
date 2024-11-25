import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from "./components/Footer";
import ProfilePage from "./pages/ProfilePage";

import './styles/general.css';
import './styles/navigation.css';
import './styles/main.css';

const App = () => {
  return (
    <main>
      <Routes>  
        <Route path="/" element={<HomePage />} /> 
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
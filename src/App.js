import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkPage from "./pages/Other/WorkPage";
import WorksPage from "./pages/Other/WorksPage";
import Footer from "./components/Footer";

import './styles/homePage/general.css';
import ProfilePage from "./pages/Other/ProfilePage";

const App = () => {
  return (
    <div>
      <Routes>  
        <Route path="/" element={<HomePage />} /> 
        <Route path="/profile/work/:id" element={<WorkPage /> }/>
        <Route path="/profile/:id" element={<ProfilePage />}/>
        <Route path="/profile/portfolio/:id" element={<WorksPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
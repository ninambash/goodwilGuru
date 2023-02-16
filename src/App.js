import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';
import Welcome from './components/pages/Welcome';
import Navbar from './components/Navbar';
import CreateItem from './components/pages/CreateItem';
import Campaigns from './components/pages/Campaigns';
import CampaignDetails from './components/pages/CampaignDetails';
import Donate from './components/pages/Donate';

import RecentCard from './components/pages/RecentCard';
import Recent from './components/pages/Recent';

import Footer from './components/Footer';


import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [campaignDetails, setCampaignDetails] = useState(null);
 
  const [donate, setDonate] = useState(null);
  

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setCurrentUser(jwt_decode(token));
    } else {
      setCurrentUser(null);
    }
  }, []);

  const handleLogout = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt');
      setCurrentUser(null);
    }
  };
  return (
    <Router>
      <header>
        <Navbar currentUser={currentUser} handleLogout={handleLogout} />
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome campaigns={campaigns} />} />
          <Route path="/register" element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          
          <Route path="/CreateItem" element={<CreateItem currentUser={currentUser} />} />
          <Route path="/profile" element={<Profile handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="/campaigns" element={<Campaigns currentUser={currentUser} campaigns={campaigns} setCampaigns={setCampaigns} />} />
          <Route path="/campaign/:id/CampaignDetails" element={<CampaignDetails currentUser={currentUser} campaignDetails={campaignDetails} setCampaignDetails={setCampaignDetails} />} />
          
           <Route path="/campaign/:id/Donate" 
             element={<Donate 
             currentUser={currentUser} 
             setDonate={setDonate} 
           />} 
/>

          <Route path="/donate" element={<Donate currentUser={currentUser} donate={donate} setDonate={setDonate} />} />
           
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;

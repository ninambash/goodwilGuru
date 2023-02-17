import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Campaigns from "./Campaigns"
import Heading from "./Heading";

import CampaignCard from "./CampaignCard";

import RecentCard from "./RecentCard";
import Happening from "./Happening";
import Content from "./Content";

import Hero from "./Hero";

import '../css/welcome.css'

export default function Welcome() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/campaign`)
    
      .then(res => {
        console.log('Campaign', res.data)
        setCampaigns(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="content-wrapper">
        <Hero/>
        <Content/>

        <div className="campaigns">
         <Campaigns campaigns={campaigns} />
       </div>
       
<div>
 
 <h1> Cities Near You</h1>
</div>
       <Happening/>
      
       <Heading/>
       

        
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import CampaignEditForm from './CampaignEditForm';
import Content from './Content';
import '../css/campaigndetails.css';

export default function CampaignDetails({ currentUser }) {
  const { id } = useParams();

  const [campaign, setCampaign] = useState({
    name: '',
    price: 0,
    content: '',
    image: '',
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/campaign/${id}`)
      .then((res) => {
        if (res.data) {
          setCampaign(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="campaign-details-container">
      <div className="campaign-details">
        <h1>Campaign Details</h1>
        <p>Name: {campaign.name}</p>
        <p>Goal: {campaign.price}</p>
        <p>Story: {campaign.content}</p>
        <div className="image-container">
          <img src={campaign.image} alt="Campaign" />
        </div>
      </div>
      {currentUser && (
        <div className="edit-campaign-container">
         
          <CampaignEditForm campaign={campaign} />
          
        </div>
      )}
    </div>
  );
}





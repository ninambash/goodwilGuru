import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import CampaignEditForm from './CampaignEditForm';

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
    <div>
      <h1>Campaign Details</h1>
      <p>Name: {campaign.name}</p>
      <p>Price: {campaign.price}</p>
      <p>Content: {campaign.content}</p>
      <img src={campaign.image} alt="Campaign" />
  
      {currentUser && (
        <div>
          <Link to={`/campaign/${id}/campaignEditForm`}>Edit Campaign</Link>
          <CampaignEditForm campaign={campaign} />
        </div>
      )}
    </div>
  );
  
}



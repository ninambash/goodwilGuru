import React from 'react';
import { Link } from 'react-router-dom';
import '../css/campaigncard.css';

export default function CampaignCard({ campaign, handleDonate }) {
  const handleDonateClick = () => {
    handleDonate(campaign._id);
  };

  return (
   
    <div className="campaign-card-row">
    <div className="campaign-card">
      <div className="campaign-card-image">
        <Link to={{ pathname: `/campaign/${campaign._id}`, state: { campaign } }}>
          <img src={campaign.image} alt={campaign.name} />
        </Link>
      </div>
      <div className="campaign-card-details">
        <h3 className="campaign-card-name">{campaign.name}</h3>
        <div className="campaign-card-buttons">
          <Link to={`/campaign/${campaign._id}/CampaignDetails`}>
            <button className="campaign-card-button">View Details</button>
          </Link>
          <Link to={`/campaign/${campaign._id}/donate`}>
            <button className="campaign-card-button" onClick={handleDonateClick}>
              Donate
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>

  

    
  );
}

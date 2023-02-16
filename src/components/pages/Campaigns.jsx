import React from 'react';
import { Link } from 'react-router-dom';

import CampaignCard from './CampaignCard';

export default function Campaign({ currentUser, campaigns }) {
  console.log('Campaign', campaigns);

  const handleDonate = (campaignId) => {
    // handle donate logic here
    console.log(`Donating to campaign ${campaignId}`);
  };

  return (
    <div>
      <h2>All Campaigns</h2>
      {currentUser && (
        <Link to="/CreateItem">
          <button>Create New Campaign</button>
        </Link>
      )}
      <div className="campaign-cards">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign._id} campaign={campaign} handleDonate={handleDonate} />
        ))}
      </div>
    </div>
  );
}


{/* <div className="campaign-details">
        <CampaignDetails />
      </div> */}

      // <div className="campaigns">
      //   <Campaigns campaigns={campaigns} />
      // </div>
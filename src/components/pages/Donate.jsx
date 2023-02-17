import React from 'react';
import Content from './Content';
import Payment from './Payment';
import CampaignDetails from './CampaignDetails';
import '../css/donate.css';


const Donate = () => {
  return (
    <div className='donate'>
      <h1 className='donate__title'>Donate</h1>
      <div className='donate__content'>
        <CampaignDetails/>
      </div>
      <Payment />
    </div>
  );
}

export default Donate;




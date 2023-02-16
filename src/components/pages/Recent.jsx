import React from "react"


import RecentCard from "./RecentCard"

import '../css/recent.css';

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <h2>
          'Recent Campaigns' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 

          </h2>
         
          <RecentCard />
        </div>
      </section>
    </>
  )
}
export default Recent
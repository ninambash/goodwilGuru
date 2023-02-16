import React from "react"
import { list } from "./Data"
import '../css/recentcard.css';

const RecentCard = () => {
  return (
    <div className="recent-card">
      {list.map((val, index) => {
        const { cover, category, location, name, price, type } = val
        return (
          <div className="recent-card-item" key={index}>
            <img src={cover} alt={name} />
            <div className='text'>
              <div className='category flex'>
                <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                <i className='fa fa-heart'></i>
              </div>
              <h4>{name}</h4>
              <p>
                <i className='fa fa-location-dot'></i> {location}
              </p>
            </div>
            <div className='button flex'>
              <div>
                <button className='btn2'>{price}</button> <label htmlFor=''></label>
              </div>
              <span>{type}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RecentCard

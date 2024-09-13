import React from 'react'

import './styles/Shared.css'

const Orders = () => {
  return (
    <div className="secondary-layout">
      <div className="main-layout">
        <div className="main-container"></div>
        <div className="utilities-container">
          <div className="utility active">
            
          </div>
          <div className="utility"></div>
          <div className="utility"></div>
          <div className="utility"></div>
        </div>
        <div className="controls-container">
          <button>Clear</button>
          <button className="primary-button">Complete Order</button>
        </div>
      </div>
      <div className="side-layout">
        <div className="main-container">

        </div>
        <div className="controls-container">
          <button className="primary-button expanded">Pay &nbsp;<span className="secondary-text">($0.00)</span></button>
        </div>
      </div>
    </div>
  )
}

export default Orders
import React from 'react'

import './styles/Shared.css'

import { FiPlusSquare } from "react-icons/fi";
import { MdCloudUpload } from "react-icons/md";

const Product = () => {
  return (
    <div className="single-layout">
      <div className="controls-container">
        <button><span className='button-icon'><MdCloudUpload /></span> &nbsp;&nbsp;   Export</button>
        <button className="primary-button"><span className="button-icon"><FiPlusSquare /></span>&nbsp;&nbsp;Create New</button>
      </div>
      <div className="main-container">
        <div className="controls-container override-center">
          <div className="controls-col">
            <input placeholder='Search...' type="text" />
          </div>
          <div className="controls-col right">
            <button className="light-button">Category</button>
            <button className="light-button">Date</button>
          </div>
        </div>
        <div className="deck-wrap-container bt">

        </div>
      </div>
    </div>
  )
}

export default Product
import React from 'react'
import './styles/Header.css'

import { FaHouse } from "react-icons/fa6";
import { TbDeviceAnalytics } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { GiCoffeeBeans } from "react-icons/gi";
import { PiHouse } from "react-icons/pi";

import { Link } from 'react-router-dom'
import Welcome from '../pages/Welcome.js'
import Orders from '../pages/Orders.js'
import Product from '../pages/Product.js'
import Analytics from '../pages/Analytics.js'


const Header = ({ user, title }) => {
  return (
    <header>
        <div className="logo">
            <div className="image-col">
                <div className="image-container">
                    <img src="https://picsum.photos/id/237/200/300" alt="user" />
                </div>
            </div>
            <div className="desc-col">
                <div className="title">{title}</div>
                <div className="logged-user">{user}</div>
            </div>
        </div>
        <div className="navigation-line">
            <Link to="/">
                <div className="nav-item">
                    <div className="icon">
                        <PiHouse />
                    </div>
                    <div className="nav-title">Dashboard</div>
                </div>
            </Link>

            <Link to="/analytics">
                <div className="nav-item">
                    <div className="icon">
                        <TbDeviceAnalytics />
                    </div>
                    <div className="nav-title">Analytics</div>
                </div>
            </Link>

            <Link to="/orders">
                <div className="nav-item">
                    <div className="icon">
                        <FiShoppingCart />
                    </div>
                    <div className="nav-title">Orders</div>
                </div>
            </Link>

            <Link to="/products">
                <div className="nav-item">
                    <div className="icon">
                        <GiCoffeeBeans />
                    </div>
                    <div className="nav-title">Products</div>
                </div>
            </Link>
        </div>
    </header>
  )
}

Header.defaultProps = {
    "user": "John Doe",
    "title": "Aster Point-Of-Sale"
}

export default Header
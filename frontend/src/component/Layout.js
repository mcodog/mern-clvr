import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import './styles/Layout.css'
import { GiHamburgerMenu } from "react-icons/gi";

import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const [title, setTitle] = useState('Aster Point-Of-Sale');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setTitle('Dashboard');
        break;
      case '/analytics':
        setTitle('Analytics');
        break;
      case '/orders':
        setTitle('Orders');
        break;
      case '/products':
        setTitle('Products');
        break;
      default:
        setTitle('Aster Point-Of-Sale');
    }
  }, [location.pathname]);

  return (
    <div className="App">
        <Header />
        <div className="app-body">
            <div className="app-title">
                <span className="nav-toggle"><GiHamburgerMenu /></span>
                <span className="title">{title}</span>
            </div>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout
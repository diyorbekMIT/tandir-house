import React from 'react';
import '../css/App.css';
import { Button, Container, Typography, Stack, Box, Switch, SwitchProps } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from './screens/homePage';
import { ProductsPage } from './screens/productsPage';
import  UserPage  from './screens/userPage';
import { HomeNavbar } from './components/navbar/homeNavbar';
import { OtherNavbar } from './components/navbar/otherNavbar';


import "../css/navbar.css";
import "../css/footer.css";
import '../css/products.css';

import  HelpPage  from './screens/helpPage';
import Footer from './components/footer';
import OrdersPage from './screens/ordersPage';
// import { OrdersPage } from './screens/ordersPage';


function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
      <Routes>
        <Route path="/products/*" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/member-page" element={<UserPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

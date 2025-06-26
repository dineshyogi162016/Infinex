import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Navigate, Route, Routes } from 'react-router-dom'

import Home from './user/Pages/Home'
import About from './user/Pages/About'
import Services from './user/Pages/Services';
import PageNotFound from './user/Pages/PageNotFound'
import Contact from './user/Pages/Contact';
import Portfolio from './user/Pages/Portfolio'
import Team from './user/Pages/Team';
import Blog from './user/Pages/Blog';
import Dashboard from './admin/Pages/Dashboard';
import Login from './admin/Pages/Login';
import AdminRoute from './Routes/AdminRoute';
import UserRoute from './Routes/UserRoute';
import Sinup from './admin/Pages/Sinup';
import ForgotPassword from './admin/Pages/ForgotPassword';
import ConfirmOTP from './admin/Pages/ConfirmOTP';
import ResetPassword from './admin/Pages/ResetPassword';
import LoginRoute from './Routes/LoginRoute';
import ManageNavigation from './admin/Pages/ManageNavigation';
import AboutAdmin from './admin/Pages/AboutAdmin';
import ServicesAdmin from './admin/Pages/ServicesAdmin';
import TestimonialAdmin from './admin/Pages/TestimonialAdmin';
import BlogAdmin from './admin/Pages/BlogAdmin';
//import AboutAdminJanvi from './admin/Pages/AboutAdminJanvi';

const Mainpage = () => {
  

  useEffect(() => {
      Aos.init({ duration: 1000 }); // optional config
    }, []);
  return (
    <>
      <Routes>
        {/* User Routes  */}
        <Route path={"/"} element={<UserRoute Component={Home} />} />
        <Route path={"/About"} element={<UserRoute Component={About} />} />
        <Route path={"/Services"} element={<UserRoute Component={Services} />} />
        <Route path={"/Portfolio"} element={<UserRoute Component={Portfolio} />} />
        <Route path={"/Team"} element={<UserRoute Component={Team} />} />
        <Route path={"/Blog"} element={<UserRoute Component={Blog} />} />
        <Route path={"/Contact"} element={<UserRoute Component={Contact} />} />

        {/* Admin Routes  */}
        {/*<Route path={"/dashboard"} element={<AdminRoute Component={Dashboard} />} />*/}
        {/*<Route path={"/ManageNavigation"} element={<AdminRoute Component={ManageNavigation} />} />*/}
		<Route path={"/AboutAdmin"} element={<AdminRoute Component={AboutAdmin} />} />
        <Route path={"/ServicesAdmin"} element={<AdminRoute Component={ServicesAdmin} />} />
		<Route path={"/BlogAdmin"} element={<AdminRoute Component={BlogAdmin} />} />
		<Route path={"/TestimonialAdmin"} element={<AdminRoute Component={TestimonialAdmin} />} />
        {/*<Route path={"/AdminAboutJanvi"} element={<AdminRoute Component={AboutAdminJanvi} />} />*/}

        {/* Login Routes  */}
        <Route path={"/login"} element={<LoginRoute Component={Login} />} />
        <Route path="/signup" element={<LoginRoute Component={Sinup} /> } />
        <Route path="/forgotpassword" element={<LoginRoute Component={ForgotPassword} /> } />
        <Route path="/confirmOTP" element={<LoginRoute Component={ConfirmOTP} /> } />
        <Route path="/ResetPassword" element={<LoginRoute Component={ResetPassword} /> } />


        <Route path={"/*"} element={<PageNotFound />} />
        {/* <Route path={"/*/"} element={<Navigate replace to="/*" />} /> */}
      </Routes>
    </>
  )
}

export default Mainpage

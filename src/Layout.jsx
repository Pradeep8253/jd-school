import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./components/Header/Topheader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



function Layout() {
  return (
    <>
      <TopHeader /> 
      {/* <MiddleHeader/>
      <MainHeader /> */}
      <Header/>

      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;

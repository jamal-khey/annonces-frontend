import React from "react";
import Footer from "../footer/Footer";
import TopNav from "../header/TopNav";
import MainNavBar from "../header/MainNavBar"


const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <MainNavBar />
      <main className="pt-32">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

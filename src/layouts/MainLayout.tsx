import React from "react";
import "../../src/App.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAppContext } from "../state management/StateContext";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const MainLayout: React.FC = () => {
  const { hide } = useAppContext();

  return (
    <div className="banner-color">
      <div className="banner">
        <img
          src="/image/main-banner.png"
          alt="banner"
          className={`${!hide ? "d-none" : "main-banner"}`}
        />
        <img
          src="/image/small-banner.png"
          alt="small-banner"
          className="small-banner"
        />
        <div className="component">
          <Header />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

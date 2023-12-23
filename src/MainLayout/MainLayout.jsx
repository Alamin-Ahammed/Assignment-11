import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollToTopBottom from "../components/ScrollToTopBottom/ScrollToTopBottom";

export default function MainLayout() {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      <ScrollToTopBottom />
      <div
        style={{ paddingTop: '4rem' }}
      >
        {navigation.state === "loading" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "73vh",
            }}
          >
            <img
              src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
              alt="loading...."
            />
          </div>
        ) : (
          <Outlet />
        )}
        
      </div>
      <Footer />
    </div>
  );
}

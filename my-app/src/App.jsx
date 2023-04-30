import React from "react";
import Announcement from "./components/Announcement";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Products from "./components/Products";
import Home from "./pages/Home";
import Newletter from "./components/Newletter";
import Footer from "./components/Footer";

export default () => (
  <>
    {/* <Home /> */}
    <Announcement />
    <Navbar />
    <Slider />
    <Categories />
    <Products />
    <Newletter />
    <Footer />
  </>
);

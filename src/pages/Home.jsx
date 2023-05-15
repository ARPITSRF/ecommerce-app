import React from "react";
import Slider from "../components/Slider";
import Productlist from "./Productlist";
import Announcement from "../components/Announcement";

const Home = () => {
  return <>
    <Announcement />
    <Slider />
    <Productlist />
  </>
};

export default Home;

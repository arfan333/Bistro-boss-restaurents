/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../banner/Banner";
import Categories from "../categories/Categories";
import PopularMenu from "../popularMenu/PopularMenu";
import FeatureBanner from "../featuredBanner/FeatureBanner";
import Testimonial from "../testimonialSection/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss..|...Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <FeatureBanner></FeatureBanner>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

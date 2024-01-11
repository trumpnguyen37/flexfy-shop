import React from "react";
import Head from "../../common/header/Head";
import Header from "../../common/header/Header";
import Home from "../../components/MainPage/Home";
import BestSellerDeals from "../../components/bestsellers/BestSellerDeals";
import SaleOff from "../../components/saleoff/SaleOff";
import TopCategories from "../../components/topcategories/TopCategories";
import NewArrival from "../../components/newarrival/NewArrival";
import OurCrew from "../../components/ourcrew/OurCrew";
import Reward from "../../components/reward/Reward";
import Community from "../../components/community/Community";
import Footer from "../../common/footer/footer";

export default function Pages() {
  return (
    <>
      <Header />
      <Home />
      <BestSellerDeals />
      <SaleOff />
      <TopCategories />
      <NewArrival />
      <OurCrew />
      <Reward />
      <Community />
      <Footer />
    </>
  );
}

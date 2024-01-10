import React from "react";
import Head from "../../common/header/Head";
import Header from "../../common/header/Header";
import Home from "../../components/MainPage/Home";
import BestSellerDeals from "../../components/bestsellers/BestSellerDeals";
import SaleOff from "../../components/saleoff/SaleOff";
import TopCategories from "../../components/topcategories/TopCategories";
import NewArrival from "../../components/newarrival/NewArrival";
import OurCrew from "../../components/ourcrew/OurCrew";

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
    </>
  );
}

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import coverImage from "../../../assets/shop/banner2.jpg";
import CoverSectionBanner from "../../shared/coverSection/CoverSectionBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../customsHooks/useMenu/useMenu";
import OrderPanelManager from "../orderPanel/OrderPanelManager";
import { useParams } from "react-router-dom";

const OrderPage = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessertS = menu.filter((item) => item.category === "dessert");
  const saladItems = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
 
  return (
    <div>
      <Helmet>
        <title>Food...||Order</title>
      </Helmet>
      <CoverSectionBanner
        image={coverImage}
        title={"ORDER FOOD"}
        details={"Would you like to try a dish?"}
      ></CoverSectionBanner>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderPanelManager items={saladItems}></OrderPanelManager>
        </TabPanel>
        <TabPanel>
          <OrderPanelManager items={pizza}></OrderPanelManager>
        </TabPanel>
        <TabPanel>
          <OrderPanelManager items={soup}></OrderPanelManager>
        </TabPanel>
        <TabPanel>
          <OrderPanelManager items={dessertS}></OrderPanelManager>
        </TabPanel>
        <TabPanel>
          <OrderPanelManager items={drinks}></OrderPanelManager>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderPage;

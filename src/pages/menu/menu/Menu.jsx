/* eslint-disable no-unused-vars */
import React from "react";
import { Helmet } from "react-helmet-async";
import CoverSectionBanner from "../../shared/coverSection/CoverSectionBanner";
import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../customsHooks/useMenu/useMenu";
import SubTitleSection from "../../../components/subTitleSection/SubTitleSection";
import MenuCategory from "../menuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessertS = menu.filter((item) => item.category === "dessert");
  const saladItems = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro...|..Menu</title>
      </Helmet>
      <CoverSectionBanner
        image={menuImage}
        title="OUR MENU"
        details="Would you like to try a dish?"
      ></CoverSectionBanner>
      <SubTitleSection
        heading={"TODAY'S OFFER"}
        subHeading={"Don't miss"}
      ></SubTitleSection>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessertS}
        title={"DESSERTS"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        image={dessertImage}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"PIZZA"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        image={pizzaImage}
      ></MenuCategory>
      <MenuCategory
        items={saladItems}
        title={"SALADS"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        image={saladImage}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"SOUPS"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        image={soupImage}
      ></MenuCategory>
    </div>
  );
};

export default Menu;

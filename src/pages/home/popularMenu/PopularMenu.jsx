/* eslint-disable no-unused-vars */
import React from "react";
import SubTitleSection from "../../../components/subTitleSection/SubTitleSection";
import MenuItem from "../../shared/menuitems/MenuItem";
import useMenu from "../../../customsHooks/useMenu/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <section>
      <SubTitleSection
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SubTitleSection>
      <div className="grid md:grid-cols-2 gap-6 my-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-8 font-semibold text-[20px]">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;

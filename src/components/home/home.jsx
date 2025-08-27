import { Categories } from "./categories";
import { FeaturedReceip } from "./hot_reciep";
import { SimpleDishs } from "./simple_recipes";
import { Instagram } from "./instagram";
import { LearnMore } from "./learn_more";
import { MoreRecipes } from "./more_recipes";
import { Subscribe } from "../subscribe";
import { Footer } from "../footer";
import { useDispatch } from "react-redux";
import { homeThunk } from "../../../redux/home";
import { useEffect } from "react";
import "../../style/home.scss";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeThunk());
  });
  return (
    <div id="home-container">
      <FeaturedReceip></FeaturedReceip>
      <Categories></Categories>
      <SimpleDishs></SimpleDishs>
      <LearnMore></LearnMore>
      <Instagram></Instagram>
      <MoreRecipes header={"Try this delicious recipe to make your day"} />
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

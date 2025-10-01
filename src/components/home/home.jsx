import { Categories } from "./categories";
import { FeaturedReceip } from "./hot_reciep";
import { SimpleDishs } from "./simple_recipes";
import { Instagram } from "./instagram";
import { LearnMore } from "./learn_more";
import { MoreRecipes } from "../similar";
import { Subscribe } from "../subscribe";
import { Footer } from "../footer";
import { useDispatch, useSelector } from "react-redux";
import { homeThunk } from "../../redux/home";
import { useEffect, useRef } from "react";
import "../../style/home.scss";
// import { useAuthCheck } from "../../../utils/useAuthCheck";

export const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.home);
  const hasRequested = useRef(false);

  useEffect(() => {
    if (!data && !hasRequested.current) {
      hasRequested.current = true;
      dispatch(homeThunk());
    }
  }, [dispatch, data]);
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

import image from "../../assets/image 20.png";
import { Categories } from "./categories";
import { FeaturedReceip } from "./hot_reciep";
import { SimpleDishs } from "./simple_recipes";

export const Home = () => {
  return (
    <div id="home-container">
      <FeaturedReceip></FeaturedReceip>
    </div>
  );
};

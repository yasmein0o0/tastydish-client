import { useSelector } from "react-redux";
import img from "../../assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png";
import img1 from "../../assets/Group 827.png";
import img2 from "../../assets/Badge.png";
import img4 from "../../assets/ForkKnife.png";
import img5 from "../../assets/Timer.png";
import img6 from "../../assets/PlayCircle.png";

export const FeaturedReceip = () => {
  return (
    <div id="featured-receipe-container">
      <div className="text-conatiner">
        <div className="category">
          <img src={img1} alt="" />
        </div>

        <div id="f-dish-name">Spicy delicious chicken wings</div>
        <div id="f-dish-descriptin">
          This hot chicken chopped salad is a spicy and satisfying lunch option
          that's easy to make. The tender chicken is coated in a spicy hot sauce
          and served over a bed of fresh greens and crunchy veggies, making it a
          healthy and delicious meal
        </div>
        <div id="f-dish-details">
          <div id="f-dish-time">
            <img src={img5} alt="" />
            <span>15 minutes</span>
          </div>
          <div id="f-dish-type">
            <img src={img4} alt="" />
            chicken
          </div>
        </div>
        <button id="f-dish-view">
          view recipe <img src={img6} alt="" />
        </button>
      </div>
      <img src={img} alt="" id="dish-image" />
      <img src={img2} alt="" id="badge" />
    </div>
  );
};

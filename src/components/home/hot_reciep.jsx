import { useSelector } from "react-redux";

export const FeaturedReceip = () => {
  return (
    <div id="featured-receipe-container">
      <div className="text-conatiner">
        <div className="category">
          <img src="" alt="" srcset="" />
          <span>hot recipes</span>
        </div>

        <div id="f-dish-name"></div>
        <div id="f-dish-descriptin"></div>
        <div id="f-dish-details">
          <div id="f-dish-time"></div>
          <div id="f-dish-type"></div>
        </div>
        <button id="f-dish-view"></button>
      </div>
      <img src="" alt="" srcset="" />
      <img src="" alt="" id="badge" />
    </div>
  );
};

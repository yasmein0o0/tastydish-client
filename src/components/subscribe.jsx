import img1 from "../assets/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png";
import img3 from "../assets/rucola-png.png";
import img2 from "../assets/Photo-plate.png";
import "../style/subscribe.scss";
export const Subscribe = () => {
  return (
    <div id="subscribe-conatiner">
      <div id="subscribe-text">
        <h2>Deliciousness to your inbox</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <div id="email-section">
          <input type="email" required placeholder="Your email address..." />
          <button>subscribe</button>
        </div>
      </div>
      <img src={img1} alt="" id="salad" />
      <img src={img2} alt="" id="egg" />
      <img src={img3} alt="" id="plant" />
    </div>
  );
};

import { useNavigate } from "react-router-dom";
import img from "../../assets/portrait-happy-male-chef-dressed-uniform 1.png";
export const LearnMore = () => {
  const navigate = useNavigate();
  return (
    <div id="learn-container">
      <div id="learn-text">
        <h2>everyone can be a chief in their own kitchen</h2>
        <p>
          everyone can be a chief in their own kitchen everyone can be a chief
          in their own kitchen everyone can be a chief in their own kitchen
        </p>
        <button onClick={() => navigate("/blog")}>learn more</button>
      </div>

      <div id="learn-image">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

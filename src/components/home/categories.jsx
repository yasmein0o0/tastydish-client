import { useDispatch } from "react-redux";
import image20 from "../../assets/image 20.png";
import image21 from "../../assets/image 21.png";
import image22 from "../../assets/image 22.png";
import image23 from "../../assets/image 23.png";
import image24 from "../../assets/image 24.png";
import image25 from "../../assets/image 25.png";
import { searchThunk } from "../../redux/search";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (prefix) => {
    navigate("/recipes");
    dispatch(searchThunk(prefix));
  };

  return (
    <div id="categories">
      <div id="c-section1">
        <h1 id="c-h1">categories</h1>
        <button id="show-all" onClick={() => navigate("/recipes")}>
          view all categories
        </button>
      </div>
      <div id="c-section2">
        <div className="category" onClick={() => handleClick("breakfast")}>
          <img src={image25} alt="" className="category-img" />
          <div className="category-name">breakfast</div>
        </div>
        <div className="category" onClick={() => handleClick("vegan")}>
          <img src={image20} alt="" className="category-img" />
          <div className="category-name">vegan</div>
        </div>
        <div className="category" onClick={() => handleClick("meat")}>
          <img src={image21} alt="" className="category-img" />
          <div className="category-name">meat</div>
        </div>
        <div className="category" onClick={() => handleClick("dessert")}>
          <img src={image22} alt="" className="category-img" />
          <div className="category-name">dessert</div>
        </div>
        <div className="category" onClick={() => handleClick("lunch")}>
          <img src={image23} alt="" className="category-img" />
          <div className="category-name">lunch</div>
        </div>
        <div className="category" onClick={() => handleClick("chocolate")}>
          <img src={image24} alt="" className="category-img" />
          <div className="category-name">chocolate</div>
        </div>
      </div>
    </div>
  );
};

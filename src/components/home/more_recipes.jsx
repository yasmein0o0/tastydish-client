import { useSelector } from "react-redux";
import { extractMainIngredient } from "../../../utils/dataExtraction";
import "../../style/more_recipes.scss";
import img1 from "../../assets/ForkKnife.png";
import img2 from "../../assets/Timer.png";
export const MoreRecipes = () => {
  const { data, loading, error } = useSelector((state) => state.home);
  console.log(data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (data) {
    return (
      <div id="more-recipes-container">
        <div id="more-text">
          <h2>Try this delicious recipe to make your day</h2>
        </div>
        <div id="more-recipes-cards">
          {data.results.slice(9, 17).map((elem) => (
            <div className="more-dish" key={elem.id}>
              <img src={elem.thumbnail_url} alt="" className="more-dish-pic" />
              <div className="more-dish-name">{elem.name}</div>
              <div className="more-dish-details">
                <div className="more-dish-time">
                  <img src={img2} alt="" className="details-icon" />
                  {elem.total_time_tier.display_tier}
                </div>
                <div className="more-dish-type">
                  <img src={img1} alt="" className="details-icon" />
                  {extractMainIngredient(elem)}{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

import { useSelector } from "react-redux";
import { extractMainIngredient } from "../../../utils/dataExtraction";
import ad from "../../assets/Ads.png";
import img1 from "../../assets/ForkKnife.png";
import img2 from "../../assets/Timer.png";
export const SimpleDishs = () => {
  const { data, loading, error } = useSelector((state) => state.home);
  if (data) {
    return (
      <div id="simple-dishs-container">
        <div id="simple-heading">
          <h2>Simple and tasty recipes</h2>
          <p>
            simple and tasty recipes simple and tasty recipes simple and tasty
            recipes simple and tasty recipes simple and tasty recipes simple and
            tasty recipes simple and tasty recipes simple and tasty recipes
          </p>
        </div>

        <div id="simple-dishes">
          {data.results.slice(0, 8).map((elem) => (
            <div className="dish" key={elem.id}>
              <img
                src={elem.thumbnail_url}
                alt={elem.name}
                className="dish-pic"
              />
              <div className="dish-name">{elem.name}</div>
              <div className="dish-details">
                <div className="dish-time">
                  <img src={img2} alt="" className="details-icon" />
                  {elem.total_time_tier.display_tier}
                </div>
                <div className="dish-type">
                  <img src={img1} alt="" className="details-icon" />
                  {extractMainIngredient(elem)}{" "}
                </div>
              </div>
            </div>
          ))}

          <div id="ad">
            <img src={ad} alt="" />
          </div>
        </div>
      </div>
    );
  }

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return null;
};

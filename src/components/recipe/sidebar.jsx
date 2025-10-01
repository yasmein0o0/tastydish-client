import { useDispatch, useSelector } from "react-redux";
import img from "../../assets/Ads.png";
import { dishClick } from "../../utils/dishClick";
import { useNavigate } from "react-router-dom";
export const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.home);
  const recipe = useSelector((state) => state.recipe);
  if (loading)
    return (
      <div id="sidebar">
        <h1>other recipes</h1>
        <div>Loading...</div>
      </div>
    );
  if (error)
    return (
      <div id="sidebar">
        <h1>other recipes</h1>
        <div>.....</div>
      </div>
    );
  return (
    <div id="sidebar">
      <h1>other recipes</h1>
      {data?.results?.slice(17, 20).map((element) => {
        return (
          <div
            className="sidebar-element"
            key={element.id}
            onClick={() =>
              dishClick(recipe.loading, navigate, dispatch, element.id)
            }
          >
            <img src={element.thumbnail_url} alt="" />
            <div className="sidebar-text">
              <h2>{element.name}</h2>
              <p className="time">
                {element.total_time_tier?.display_tier
                  ? element.total_time_tier.display_tier
                      .replace("Under ", "")
                      .trim()
                  : "N/A"}
              </p>
            </div>
          </div>
        );
      })}
      <div id="ad">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

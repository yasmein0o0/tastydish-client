import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../../assets/ForkKnife.png";
import img2 from "../../assets/Timer.png";
import { extractMainIngredient } from "../../utils/dataExtraction";
import {
  addToFavouritesThunk,
  removeFromFavouritesThunk,
  getFavouritesThunk,
} from "../../redux/favourites";
import { useNavigate } from "react-router-dom";
export const RecipeOverview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hasRequested = useRef(false);
  const { data, loading, error } = useSelector((state) => state.recipe);
  const { accessToken } = useSelector((state) => state.accessToken);
  const fav = useSelector((state) => state.favourites);
  const [optimisticFaved, setOptimisticFaved] = useState(false);

  useEffect(() => {
    if (accessToken && fav.items.length === 0 && !hasRequested.current) {
      hasRequested.current = true;
      dispatch(getFavouritesThunk());
    }
  }, [accessToken, fav.items.length, dispatch]);

  // Use Redux state as source of truth, but optimistic state for immediate UI
  const actualFaved = fav.items?.find((item) => item.dish_id === `${data?.id}`);

  const displayFaved =
    optimisticFaved !== undefined ? optimisticFaved : actualFaved;

  useEffect(() => {
    setOptimisticFaved(actualFaved);
  }, [actualFaved]);

  const handleClick = async () => {
    if (!accessToken) return navigate("/login");
    if (!data?.id || fav.loading) return; // Prevent during loading

    const newFavedState = !optimisticFaved; // Use current display state

    // Immediate UI update
    setOptimisticFaved(newFavedState);

    try {
      if (!newFavedState) {
        // If we're setting to not faved, remove
        await dispatch(removeFromFavouritesThunk(data.id)).unwrap();
      } else {
        // If we're setting to faved, add
        await dispatch(addToFavouritesThunk(data.id)).unwrap();
      }
    } catch (error) {
      // Revert on error
      setOptimisticFaved(!newFavedState);
      console.error("Failed to toggle favourite:", error);
    }
  };
  const infoKeys = [
    "calories",
    "fat",
    "protein",
    "carbohydrates",
    "fiber",
    "sugar",
  ];
  if (data)
    return (
      <div id="overview-continer">
        <div id="overview-header">
          <div id="overview-text">
            <h1>{data.name}</h1>
            <div id="favourite" onClick={() => handleClick()}>
              <div id="img-container">
                <svg
                  className={displayFaved ? "faved" : "unfaved"}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5022 3.00001C15.6291 2.99851 14.7677 3.20077 13.9865 3.59072C13.2052 3.98066 12.5258 4.54752 12.0022 5.24621C11.293 4.30266 10.3051 3.606 9.17823 3.25482C8.05134 2.90365 6.84256 2.91573 5.72291 3.28936C4.60327 3.663 3.62948 4.37926 2.93932 5.3368C2.24916 6.29434 1.8776 7.44467 1.8772 8.62501C1.8772 15.3621 11.2373 20.6813 11.6357 20.9044C11.7477 20.9671 11.8739 21 12.0022 21C12.1305 21 12.2567 20.9671 12.3687 20.9044C14.0902 19.8961 15.7059 18.7173 17.1914 17.3856C20.4665 14.438 22.1272 11.4905 22.1272 8.62501C22.1255 7.13368 21.5323 5.70393 20.4778 4.6494C19.4233 3.59487 17.9935 3.0017 16.5022 3.00001Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div id="time-type-details">
              <div id="prep-time">
                <img src={img2} alt="" className="icon" />
                <div className="prep-text">
                  <span>prep time</span>
                  <span>
                    {data.total_time_tier?.display_tier
                      ? data.total_time_tier.display_tier
                          .replace("Under ", "")
                          .trim()
                      : "N/A"}
                  </span>
                </div>
              </div>
              <div id="cook-time">
                <img src={img2} alt="" className="icon" />
                <div className="cook-text">
                  <span>cook time</span>
                  <span>
                    {data.total_time_tier?.display_tier
                      ? data.total_time_tier.display_tier
                          .replace("Under ", "")
                          .trim()
                      : "N/A"}
                  </span>
                </div>
              </div>
              <div id="type">
                <img src={img1} alt="" className="icon" />
                <div className="type-text">
                  <span>{extractMainIngredient(data)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="dish-image-info">
          <div id="image-section">
            <img src={data.thumbnail_url} alt="" />
          </div>
          <div id="dish-info">
            <h2>nutrition information</h2>
            {infoKeys.map((element) => (
              <div className="info-details" key={element}>
                <div className="info-key">{element}</div>
                <div className="info-value">{data.nutrition[element]}</div>
              </div>
            ))}
            <p>
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.{" "}
            </p>
          </div>
          <p>{data.description}</p>
        </div>
      </div>
    );

  if (error) return <div id="overview-container-err">failed</div>;
  if (loading) return <div id="overview-container-loading">loading.....</div>;
};

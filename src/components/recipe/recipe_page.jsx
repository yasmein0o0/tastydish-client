import { RecipeOverview } from "./overview";
import { Ingredients } from "./ingredients";
import { Directions } from "./directions";
import { Sidebar } from "./sidebar";
import { Subscribe } from "../subscribe";
import { MoreRecipes } from "../similar";
import { Footer } from "../footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { recipeThunk } from "../../redux/recipe";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { homeThunk } from "../../redux/home";
import "../../style/recipe_details.scss";

export const Recipe = () => {
  const { data, loading, error } = useSelector((state) => state.home);
  const hasRequested = useRef(false);
  const homeRequested = useRef(false);
  const recipe = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id && !hasRequested.current) {
      hasRequested.current = true;
      dispatch(recipeThunk(id));
    }

    if (!data && !loading && !homeRequested.current) {
      homeRequested.current = true;
      dispatch(homeThunk());
    }
  }, [id, data, dispatch, loading]);

  if (recipe.loading)
    return (
      <div id="loading-page">
        <div className="loader"></div>
      </div>
    );
  if (recipe.error) return <div>Error: {error}</div>;
  // if (data == "") return <div>No recipe found</div>;

  return (
    <div id="recipe-page">
      <RecipeOverview />
      <div id="main-details">
        <div id="directions-ingrid-container">
          <Ingredients />
          <Directions />
        </div>
        <Sidebar />
      </div>
      <Subscribe />
      <MoreRecipes header={"You may like these recipe too"} />
      <Footer />
    </div>
  );
};

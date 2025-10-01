import { recipeThunk } from "../redux/recipe";
export const dishClick = async (loading, navigate, dispatch, recipeId) => {
    console.log(recipeId)
    try {
        if (loading) return;
        navigate(`/dish/${recipeId}`);
        await dispatch(recipeThunk(recipeId)).unwrap();
    } catch (error) {
        console.error("Failed to fetch recipe details:", error);
    }
};
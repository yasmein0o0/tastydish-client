import { useSelector } from "react-redux";

export const Ingredients = () => {
  const { data } = useSelector((state) => state.recipe);

  return (
    <div id="ingredients-container">
      <h2 className="ingredients-title">🍳 Main Ingredients</h2>

      <ul className="ingredients-list">
        {data?.sections?.[0]?.components.map((element) => (
          <li className="ingredient-item" key={element.id}>
            <span className="ingredient-checkbox">
              <input type="checkbox" id={`ingredient-${element.id}`} />
              <label htmlFor={`ingredient-${element.id}`}></label>
            </span>
            <span className="ingredient-text">{element.raw_text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

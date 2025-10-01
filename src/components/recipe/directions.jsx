import { useSelector } from "react-redux";

export const Directions = () => {
  const { data } = useSelector((state) => state.recipe);

  return (
    <div id="directions-container">
      <h2 className="directions-title">👨‍🍳 Cooking Directions</h2>

      <div className="directions-timeline">
        {data?.instructions?.map((element, index) => (
          <div className="direction-step" key={element.id || index}>
            <span className="direction-checkbox">
              <input type="checkbox" id={`direction-${element.id}`} />
              <label htmlFor={`direction-${element.id}`}></label>
            </span>
            <p className="step-text">{element.display_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

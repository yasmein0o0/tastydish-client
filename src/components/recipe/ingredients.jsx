export const Ingredients = () => {
  const data = [];
  return (
    <div id="ingredients-container">
      <h2>main ingredients</h2>
      {data.forEach((elemnt, index) => {
        return (
          <li className="ingredient" key={index}>
            {elemnt}
          </li>
        );
      })}
    </div>
  );
};

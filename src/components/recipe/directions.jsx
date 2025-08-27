export const Directions = () => {
  const data = [];
  return (
    <div id="directions">
      <h1>directions</h1>
      {data.forEach((element, index) => {
        return (
          <div className="direction" key={index}>
            {element}
          </div>
        );
      })}
    </div>
  );
};

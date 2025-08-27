export const RecipeOverview = () => {
  const infoKeys = [
    "calories",
    "total fat",
    "protein",
    "carbohydrate",
    "cholesterol",
  ];
  return (
    <div id="overview-continer">
      <div id="overview-header">
        <div id="overview-text">
          <h1></h1>
          <div id="time-type-details">
            <div id="prep-time">
              <img src="" alt="" className="icon" />
              <div className="prep-text">
                <span>prep time</span>
                <span>{/* */}</span>
              </div>
            </div>
            <div id="cook-time">
              <img src="" alt="" className="icon" />
              <div className="cook-text">
                <span>cook time</span>
                <span>{/* */}</span>
              </div>
            </div>
            <div id="type">
              <img src="" alt="" className="icon" />
              <div className="type-text">
                <span>{/* */}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="dish-image-info">
        <div id="image-section">
          <img src="" alt="" />
        </div>
        <div id="dish-info">
          <h2>nutrition information</h2>
          {infoKeys.forEach((element) => {
            return (
              <div className="info-details">
                <div className="info-key">{element}</div>
                <div className="info-value">{/* */}</div>
              </div>
            );
          })}
          <p>more infoooooooo</p>
        </div>
      </div>

      <div id="overview-extra-text"></div>
    </div>
  );
};

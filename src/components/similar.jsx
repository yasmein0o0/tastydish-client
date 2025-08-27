export const Similarities = ({ header }) => {
  const data = [];
  return (
    <div id="similarities-container">
      <h1>{header}</h1>
      <div id="similar-dishes">
        {data.forEach((element, index) => {
          return (
            <div className="similar-dish" key={index}>
              <img src={element.thumbnail_url} alt="" />
              <div className="more-dish-name">{element.name}</div>
              <div className="more-dish-details">
                <div id="more-dish-time">
                  {element.total_time_tier.display_tier}
                </div>
                <div id="more-dish-type">####</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

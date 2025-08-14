import { useSelector } from "react-redux";

export const SimpleDishs = () => {
  //data will be fetchd dishes
  const data = [];
  return (
    <div id="simple-dishs-container">
      <div id="simple-heading">
        <h2>simple and tasty recipes</h2>
        <p>
          simple and tasty recipes simple and tasty recipes simple and tasty
          recipes simple and tasty recipes
        </p>
      </div>

      <div id="simple-dishes">
        {data.forEach((elem) => {
          return (
            <div className="dish" key={elem.id}>
              <img src={elem.thumbnail_url} alt="" />
              <div className="dish-name">{elem.name}</div>
              <div className="dish-details">
                <div id="dish-time">{elem.total_time_tier.display_tier}</div>
                <div id="dish-type">####</div>
              </div>
            </div>
          );
        })}
        <div id="ad">
          <h2 id="ad-text">dont't forget to eat healthy food</h2>
          <div id="ad-image">
            <img src="" alt="" id="star" />
            <img src="" alt="" id="ad-dish-image" />
          </div>
          <div id="ad-link">www.facebook.com</div>
        </div>
      </div>
    </div>
  );
};

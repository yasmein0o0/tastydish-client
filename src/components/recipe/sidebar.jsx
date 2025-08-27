export const Sidebar = () => {
  const data = [];
  return (
    <div id="sidebar">
      <h1>other recipes</h1>
      {data.forEach((element, index) => {
        return (
          <div className="sidebar-element" key={index}>
            <img src="" alt="" />
            <div className="sidebar-text">
              <h2></h2>
              <p className="time"></p>
            </div>
          </div>
        );
      })}
      <div id="ad">
        <img src="" alt="" />
      </div>
    </div>
  );
};

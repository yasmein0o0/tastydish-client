import img from "../../assets/image 29.png";
export const BlogHeader = () => {
  return (
    <div id="blog-header">
      <h1>full guide to become a professional chef</h1>
      <p id="date">15 March 2022</p>
      <p id="blog-description">
        Insights and advice from industry veterans to help you build a
        successful culinary career
      </p>
      <div id="img-cont">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

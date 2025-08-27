import post1 from "../../assets/Post.png";
import post2 from "../../assets/Post (1).png";
import post3 from "../../assets/Post (2).png";
import post4 from "../../assets/Post (3).png";

export const Instagram = () => {
  return (
    <div id="instagram-container">
      <div id="insta-text">
        <h2>Check out @foodieland on Instagram</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div id="insta-screenhots">
        <img src={post1} alt="" className="insta-image" />
        <img src={post2} alt="" className="insta-image" />
        <img src={post3} alt="" className="insta-image" />
        <img src={post4} alt="" className="insta-image" />
      </div>
      <div id="insta-btn">
        <button>
          visit our instagram
          <img src="" alt="" />
        </button>
      </div>
    </div>
  );
};

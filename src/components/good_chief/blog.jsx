import { BlogHeader } from "./header";
import { Content } from "./content";
import { Subscribe } from "../subscribe";
import { Footer } from "../footer";
import { MoreRecipes } from "../similar";
import "../../style/blog.scss";

export const Blog = () => {
  return (
    <div id="blog">
      <BlogHeader></BlogHeader>
      <Content></Content>
      <MoreRecipes />
      <Subscribe />
      <Footer />
    </div>
  );
};

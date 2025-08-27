import { BlogHeader } from "./header";
import { Content } from "./content";
import { Similarities } from "../similar";
import { Subscribe } from "../subscribe";
import { Footer } from "../footer";

export const Blog = () => {
  return (
    <div id="Blog">
      <BlogHeader></BlogHeader>
      <Content></Content>
      <Similarities />
      <Subscribe />
      <Footer />
    </div>
  );
};

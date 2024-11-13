import React from "react";
import BlogBanner from "./blog/blog-banner";
import Article from "./article";
import { TArticlesResponse } from "@/src/api/@types/articles";

type BlogScreenProps = {
  articlesResponse: TArticlesResponse;
};
export default function BlogScreen({ articlesResponse }: BlogScreenProps) {
  return (
    <section className="relative pb-24">
      <BlogBanner />
      <Article articlesResponse={articlesResponse} />
    </section>
  );
}

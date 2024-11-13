import React from "react";
import BlogBanner from "./blog/blog-banner";
import Article from "./article";
import { TArticlesResponse } from "@/src/api/@types/articles";

type BlogScreenProps = {
  articles: TArticlesResponse;
};
export default function BlogScreen({ articles }: BlogScreenProps) {
  return (
    <section className="relative pb-24">
      <BlogBanner />
      <Article articles={articles} />
    </section>
  );
}

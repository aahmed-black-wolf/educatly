import React from "react";
import Image from "next/image";
import BlogBannerLayer from "@/public/images/blog/blog-layer.svg";
import NotFoundComponent from "../../common/not-found-component";
import ArticleList from "./article-list";
import { TArticlesResponse } from "@/src/api/@types/articles";

type ArticleProps = {
  articles: TArticlesResponse;
};

export default function Article({ articles }: ArticleProps) {
  return (
    <div className="relative flex flex-col justify-center gap-24 items-center">
      <Image
        className="z-[1]  md:translate-y-[-4%] max-h-[230px] md:max-h-[500px] 3xl:max-h-[500px]"
        alt="blog-banner"
        objectFit="cover"
        fill
        src={BlogBannerLayer}
      />
      <ArticleList articles={articles} />
      {/* <NotFoundComponent message="📭 No blogs available just yet! Stay tuned!" /> */}
    </div>
  );
}

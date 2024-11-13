import React from "react";
import PrimaryButton from "../../common/primary-button";
import ArticleCard from "./article-card";
import { HiArrowSmallDown } from "react-icons/hi2";
import { TArticlesResponse } from "@/src/api/@types/articles";

type ArticleListProps = {
  articles: TArticlesResponse;
};

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <>
      <div className="z-[2] mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative w-[90%] m-auto justify-items-center">
        {new Array(9).fill(0).map((_, index) => (
          <ArticleCard
            key={index}
            avatarName="Olivia Rhye"
            avatarDate="20 Jan 2022"
            job="Design"
            title={"UX review presentations"}
            description={
              "How do you create compelling presentations that wow your colleagues and impress your managers?"
            }
            avatarImage=""
            articleLink=""
          />
        ))}
      </div>
      <PrimaryButton
        className="w-[85%] justify-center sm:w-max"
        title="Load more"
        icon={<HiArrowSmallDown />}
      />
    </>
  );
}

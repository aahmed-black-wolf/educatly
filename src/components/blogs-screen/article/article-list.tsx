"use client";
import React, { useState } from "react";
import PrimaryButton from "../../common/primary-button";
import ArticleCard from "./article-card";
import { HiArrowSmallDown } from "react-icons/hi2";
import { TArticlesResponse } from "@/src/api/@types/articles";
import { useArticlesList } from "@/src/api/client/blogs/useArticlesList";
import { motion } from "framer-motion";

type ArticleListProps = {
  articlesResponse: TArticlesResponse;
};

export default function ArticleList({ articlesResponse }: ArticleListProps) {
  const { data } = useArticlesList({
    initialValues: articlesResponse,
  });

  const [visibleArticles, setVisibleArticles] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

  // Handler for loading more articles with simulated loading
  const loadMoreArticles = () => {
    setIsLoading(true); // Start loading state
    setTimeout(() => {
      setVisibleArticles((prevVisible) => prevVisible + 3);
      setIsLoading(false); // Stop loading after 1 second
    }, 1000);
  };

  // Determine if all articles are loaded
  const allArticlesLoaded = visibleArticles >= (data?.length || 0);

  return (
    <>
      <motion.div
        className="z-[2] mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative w-[90%] m-auto justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Loop through and animate each article card */}
        {data?.slice(0, visibleArticles).map((article) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 50 }} // Start from the bottom
            animate={{ opacity: 1, y: 0 }} // Slide up to its final position
            transition={{
              duration: 0.5, // Remove delay for instant appearing
            }}
          >
            <ArticleCard
              articleLink={article.url}
              avatarDate={article.readable_publish_date}
              avatarImage={article.user.profile_image}
              avatarName={article.user.name}
              description={article.description}
              job={article.tags}
              title={article.title}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Show loading animation or "Load more" button */}
      {!allArticlesLoaded ? (
        <PrimaryButton
          className="w-[85%] justify-center sm:w-max"
          isLoading={isLoading}
          title="Load more"
          icon={<HiArrowSmallDown />}
          onClick={loadMoreArticles}
        />
      ) : (
        <motion.div
          className="w-[85%] text-center mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          🎉 All articles are displayed!
        </motion.div>
      )}
    </>
  );
}

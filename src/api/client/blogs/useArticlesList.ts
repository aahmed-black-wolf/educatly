import { clientFetch } from "@/src/utils/fetch/client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { TArticlesResponse } from "../../@types/articles";

const getArticles = async () => {
  const response = await clientFetch.get("articles");
  const json = (await response.json()) as TArticlesResponse;
  return json;
};

export const useArticlesList = () => {
  const query = useQuery<TArticlesResponse>({
    queryKey: ["articles"],
    queryFn: () => getArticles(),
    placeholderData: keepPreviousData,
  });

  return query;
};

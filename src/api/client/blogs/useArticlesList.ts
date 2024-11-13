import { clientFetch } from "@/src/utils/fetch/client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { TArticlesResponse } from "../../@types/articles";

const getArticles = async () => {
  const response = await clientFetch.get("articles");
  const json = (await response.json()) as TArticlesResponse;
  return json;
};

export const useArticlesList = ({
  initialValues,
}: {
  initialValues?: TArticlesResponse;
}) => {
  const query = useQuery<TArticlesResponse>({
    queryKey: ["articles"],
    initialData: initialValues,
    queryFn: () => getArticles(),
    placeholderData: keepPreviousData,
  });

  return query;
};

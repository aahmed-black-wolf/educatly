import { serverFetch } from "@/src/utils/fetch/server";
import { TArticlesResponse } from "../../@types/articles";

export const getArticles = async () => {
  try {
    const response = await serverFetch.get("articles");
    const json = (await response.json()) as TArticlesResponse;

    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

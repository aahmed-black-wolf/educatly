import { getArticles } from "../api/server/blogs/getAllArticles";
import BlogScreen from "../components/blogs-screen/index";
export default async function Home() {
  const articlesResponse = await getArticles();
  return <BlogScreen articlesResponse={articlesResponse} />;
}

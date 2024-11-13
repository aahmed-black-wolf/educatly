import { getArticles } from "../api/server/blogs/getAllArticles";
import BlogScreen from "../components/blogs-screen/index";
export default async function Home() {
  const articlesResponse = await getArticles();

  console.log(articlesResponse);

  return <BlogScreen articlesResponse={articlesResponse} />;
}

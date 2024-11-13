import { getArticles } from "../api/server/blogs/getAllArticles";
import BlogScreen from "../components/blogs-screen/index";
export default async function Home() {
  const articles = await getArticles();

  console.log(articles);

  return <BlogScreen articles={articles} />;
}

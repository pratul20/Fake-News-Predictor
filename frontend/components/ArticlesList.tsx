import Article from "./Article";
import { useState, useEffect } from "react";

const ArticlesList = () => {
  var url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`;

  const [message, setMessage] = useState([]);
  async function news_list() {
    var response = await fetch(url).then((response) => response.json());
    setMessage(response["articles"]);
  }
  useEffect(() => {
    news_list();
  }, []);
  return (
    <div data-testid="list">
      {message.map((news_article) => {
        return <Article data={news_article} data-testid="item"/>
      })}
    </div>
  );
};

export default ArticlesList;

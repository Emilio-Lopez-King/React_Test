import React, { useEffect, useState } from "react";
import { getArticles } from "../Functions/Articles";
import Articles from "./Articles";

const Publications = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    getArticles(
      (data) => {
        setArticles(data);
      },
      (error) => {
        console.error("Error al obtener los artículos:", error);
      }
    );
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <Articles key={article._id} article={article} />
      ))}
    </div>
  );
};

export default Publications;

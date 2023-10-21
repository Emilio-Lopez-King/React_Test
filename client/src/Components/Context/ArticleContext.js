import { createContext, useContext, useState } from 'react';

const ArticleContext = createContext();

export const useArticleContext = () => {
  return useContext(ArticleContext);
};

export const ArticleProvider = ({ children }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <ArticleContext.Provider value={{ selectedArticle, setSelectedArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};
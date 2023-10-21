import React from "react";
import {
  Header,
  Footer,
  Welcome,
  Publications,
  AddArticle,
  ArticleProvider,
} from "./Index";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-12 gap-4 p-1">
            <div className="col-span-12 rounded-lg bg-white shadow-md p-4">
              <Welcome />
            </div>
            <div className="col-span-12 sm:col-span-8 rounded-lg border p-8 publications-container">
              <h2 className="text-xl font-bold text-gray-400 mb-4">
                Últimos Artículos Publicados
              </h2>
              <ArticleProvider>
                <Publications />
              </ArticleProvider>
            </div>
            <div className="col-span-12 sm:col-span-4 rounded-lg border p-8">
              <h2 className="text-xl font-bold text-black mb-4">
                Añadir un nuevo artículo
              </h2>
              <AddArticle />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

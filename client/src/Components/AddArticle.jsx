import React, { useState } from "react";
import { createArticle } from "../Functions/Articles";
import { useArticleContext } from "./Context/ArticleContext";

const AddArticle = () => {
  const { selectedArticle } = useArticleContext();

  const [articleData, setArticleData] = useState({
    title: selectedArticle?.title || "", // Utiliza el título del artículo seleccionado (si existe)
    author: selectedArticle?.author || "", // Utiliza el autor del artículo seleccionado (si existe)
    content: selectedArticle?.content || "", // Utiliza el contenido del artículo seleccionado (si existe)
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createArticle(
      articleData,
      (data) => {
        setArticleData({
          title: "",
          author: "",
          content: "",
        });
      },
      (error) => {
        console.error("Error al crear el artículo:", error);
      }
    );
  };

  return (
    <div className="col-span-12 sm:col-span-4 rounded-lg border p-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold">
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={articleData.title}
            onChange={(e) =>
              setArticleData({ ...articleData, title: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Título del artículo"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-bold">
            Autor
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={articleData.author}
            onChange={(e) =>
              setArticleData({ ...articleData, author: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Nombre del autor"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-bold">
            Contenido
          </label>
          <textarea
            id="content"
            name="content"
            value={articleData.content}
            onChange={(e) =>
              setArticleData({ ...articleData, content: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Contenido del artículo"
            rows="5"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Agregar Artículo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;

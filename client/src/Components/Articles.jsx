import React, { useState } from "react";
import { format } from "date-fns";
import { BsPencilFill } from "react-icons/bs";


const Articles = ({ article }) => {
  const editButtonStyle = {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  };

  const [selectedArticle, setSelectedArticle] = useState({});

  const handleEditClick = (article) => {
    setSelectedArticle(article);


  };

  return (
    <div className="mb-4">
      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden p-4 border relative">
        <div className="bg-blue-50 rounded-lg px-4 py-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {article.title}
          </h2>
          <p className="text-sm text-gray-600">
            Por{" "}
            <span className="font-semibold text-blue-500">
              {article.author}
            </span>{" "}
            - Fecha de publicación:{" "}
            <b>
              {format(new Date(article.publicationDate), "dd/MM/yyyy HH:mm:ss")}
            </b>
          </p>
          <button
            style={editButtonStyle}
            title="Editar"
            onClick={() => handleEditClick(article)}
          >
            <BsPencilFill size={24} color="#007BFF" />
          </button>
        </div>
        <div className="px-4 py-2">
          <p className="text-gray-700">{article.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Articles;

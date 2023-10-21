import React, { Fragment } from "react";

const Welcome = () => {
  return (
    <Fragment>
      <div className="h-20 overflow-hidden mt-14">
        {" "}
        {/* Agregar margen superior */}
        <h1 className="text-5xl font-bold text-center text-Titles transition-transform transform hover:scale-110 backdrop-blur-xl">
          ¡Bienvenidos a Blog Virtual!
        </h1>
      </div>
      <p className="text-SubTitles text-center mt-1 text-lg">
        Explora artículos interesantes y descubre contenido fascinante. En este
        blog, encontrarás una variedad de temas, desde tecnología y ciencia
        hasta viajes y estilo de vida. ¡Sumérgete en el conocimiento y la
        diversión!
      </p>
    </Fragment>
  );
};

export default Welcome;

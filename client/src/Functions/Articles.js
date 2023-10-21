const Conection = 'http://localhost:5000/';

export const createArticle = (newArticle, successCallback, errorCallback) => {
  fetch(Conection + "api/Articles/InsertArticles", { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  })
    .then((response) => response.json())
    .then((data) => {
      successCallback(data);
    })
    .catch((error) => {
      errorCallback(error);
    });
};

export const getArticles = (successCallback, errorCallback) => {
  fetch(Conection + "api/Articles/GetArticles", { 
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      successCallback(data);
    })
    .catch((error) => {
      errorCallback(error);
    });
};
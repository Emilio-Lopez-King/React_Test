const express = require("express");
const router = express.Router();
const Article = require("../Models/Articles");
const { check, validationResult } = require("express-validator");

// Crear un artículo
router.post("/InsertArticles", [
  check("title").notEmpty(),
  check("author").notEmpty(),
  check("content").notEmpty(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.json(newArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el artículo" });
  }
});

// Obtener todos los artículos
router.get("/GetArticles", async (req, res) => {
  try {
    let message = 'artículos encontrados';
    const articles = await Article.find().exec();
    if(!articles.length) {
      message = 'No existen artículos publicados aun.';
  }
  return res.status(200).json(articles);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los artículos: "+ message });
  }
});

module.exports = router;
import express from "express";

const router = express.Router();

// Middleware para manejar la ruta /api/categories
router.get("/categories", (req, res) => {
  // Lógica para manejar la solicitud GET de la ruta /api/categories
  res.send("Categories route");
});

export default router;

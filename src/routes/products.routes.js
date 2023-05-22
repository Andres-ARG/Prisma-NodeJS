import express from "express";
import {PrismaClient} from "@prisma/client"

const router = express.Router();
const prisma = new PrismaClient();

// Middleware para manejar la ruta /api/products
router.get("/products", async (req, res) => {
  // Lógica para manejar la solicitud GET de la ruta /api/products
  const products = await prisma.product.findMany()
  res.json(products)
});

router.post("/products", async (req, res) => {
  const newProduct = await prisma.product.create({
    data: req.body
  })
  res.json(newProduct)
})

export default router;

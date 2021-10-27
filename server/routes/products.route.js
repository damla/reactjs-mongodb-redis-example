import express from "express";
import productController from "../controllers/products.controller.js";

const router = express.Router();

router.get("/products", (req, res) => {
  productController.getAll(req, res);
});


export default router;

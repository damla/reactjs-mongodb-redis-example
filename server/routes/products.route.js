import express from "express";
import productController from "../controllers/products.controller.js";

const router = express.Router();

router.get("/all", (req, res) => {
  productController.getAll(req, res);
});

// router.get("/products:id", (req, res) => {
//   productController.getById(req, res);
// });

export default router;

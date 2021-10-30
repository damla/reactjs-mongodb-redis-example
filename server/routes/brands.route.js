import express from "express";
import brandController from "../controllers/brands.controller.js";

const router = express.Router();

router.get("/all", (req, res) => {
  brandController.getAll(req, res);
});

router.get("/:name", (req, res) => {
  brandController.getProductIds(req, res);
});

export default router;

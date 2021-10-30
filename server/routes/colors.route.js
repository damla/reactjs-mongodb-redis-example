import express from "express";
import colorController from "../controllers/colors.controller.js";

const router = express.Router();

router.get("/all", (req, res) => {
  colorController.getAll(req, res);
});

router.get("/:name", (req, res) => {
  colorController.getProductIds(req, res);
});

export default router;

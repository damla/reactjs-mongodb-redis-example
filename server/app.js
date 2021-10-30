import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectToDb from "./libs/db/mongoose.js";
import products from "./routes/products.route.js";
import colors from "./routes/colors.route.js";
import brands from "./routes/brands.route.js";

const PORT = process.env.PORT || 5000;

connectToDb();

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));

app.use("/products", products);
app.use("/colors", colors);
app.use("/brands", brands);

//Index route
app.get("/", async (req, res) => {
  res.json({
    endPoints: [
      { products: [{ all: "/products" }, { id: "products:id" }] },
      { brands: [{ all: "/brands" }, { productIds: "brands/:name" }] },
      { colors: [{ all: "/colors" }, { productIds: "colors/:name" }] },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

export default app;

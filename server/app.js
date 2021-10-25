import express from "express";
import cors from "cors";
import client from "./libs/redis/index.js";
import { getData } from "./libs/db/index.js";
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", async (req, res) => {
  await client.set("name", "damla");
  const name = await client.get("name");
  getData("product");
  res.end(`name value: ${name}`);
});

app.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

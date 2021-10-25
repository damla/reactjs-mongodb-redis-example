import express from "express";
import cors from "cors";
import client from "./redis.js";
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", async (req, res) => {
  await client.set("name", "damla");
  const name = await client.get("name");
  res.end(`name value: ${name}`);
});

app.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

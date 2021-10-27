import Brand from "../models/brands.model.js";
import client from "../libs/redis/index.js";

const controller = {};

controller.getAll = async (req, res) => {
  try {
    let data = await client.get("brans");

    if (data) res.status(200).send(data);
    else {
      let brandData = await Brand.getAll();

      await client.set("brands", JSON.stringify({ ...brandData }));
      let brands = await client.get("brands");
      res.status(200).send(JSON.parse(brands));
    }
  } catch (err) {
    console.log("Error in getting product- " + err);
    res.status(500).end("error");
  }
};
export default controller;

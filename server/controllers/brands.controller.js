import Brand from "../models/brands.model.js";
import client from "../libs/redis/index.js";
import hashProductId from "../libs/redis/helpers.js";

const controller = {};

controller.getAll = async (req, res) => {
  try {
    // check if data exist in memory cache
    let data = await client.get("brands");
    let cachedData = JSON.parse(data);

    // if data exist, send it as a response
    if (cachedData) {
      if (cachedData <= 0) {
        res.status(404).json("Brands data does not exist.");
      }
      res.status(200).json(cachedData);
    } else {
      // pull data from db
      let brands = await Brand.getAll();

      // cache the data
      await client.set("brands", JSON.stringify(brands));

      // send data pulled from db
      if (brands <= 0) res.status(404).json("Brands data does not exist.");

      hashProductId(brands);
      res.status(200).json(brands);
    }
  } catch (err) {
    console.error("Error in getting brands data - " + err.message);
    res.status(500).json({ error: "Got error in getAll controller of brands" });
  }
};

controller.getProductIds = async (req, res) => {
  // TODO: call getAll before this function
  try {
    client.smembers(req.params.name, (err, result) => {
      if (err) res.status(500).end(err);
      else res.status(200).json(result);
    });
  } catch (err) {
    console.error("Error in getting brands data - " + err.message);
    res.status(500).json({ error: "Got error in getAll controller of brands" });
  }
};

export default controller;

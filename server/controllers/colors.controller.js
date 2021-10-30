import Color from "../models/colors.model.js";
import client from "../libs/redis/index.js";
import hashProductId from "../libs/redis/utils.js";

const controller = {};

controller.getAll = async (req, res) => {
  try {
    // check if data exist in memory cache
    let data = await client.get("colors");
    let cachedData = JSON.parse(data);

    // if data exist, send it as a response
    if (cachedData) {
      if (cachedData <= 0) res.status(404).json("Colors data does not exist.");
      res.status(200).json(cachedData);
    } else {
      // pull data from db
      let colors = await Color.getAll();

      // cache the data
      await client.set("colors", JSON.stringify(colors));

      // send data pulled from db
      if (colors <= 0) res.status(404).json("Colors data does not exist.");

      hashProductId(colors);
      res.status(200).json(colors);
    }
  } catch (err) {
    console.error("Error in getting colors data - " + err.message);
    res.status(500).json({ error: "Got error in getAll controller of colors" });
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

import Color from "../models/colors.model.js";
import client from "../libs/redis/index.js";

const controller = {};

controller.getAll = async (req, res) => {
  try {
    let data = await client.get("colors");

    if (data) res.status(200).send(data);
    else {
      let colorData = await Color.getAll();

      await client.set("colors", JSON.stringify({ ...colorData }));
      let colors = await client.get("colors");
      res.status(200).send(JSON.parse(colors));
    }
  } catch (err) {
    console.log("Error in getting product- " + err);
    res.status(500).end("Got error in getAll");
  }
};
export default controller;

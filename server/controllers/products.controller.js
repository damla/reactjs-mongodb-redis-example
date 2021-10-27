import Product from "../models/products.model.js";
import client from "../libs/redis/index.js";

const controller = {};

controller.getAll = async (req, res) => {
  try {
    // check if data exist in memory cache
    let data = await client.get("products");
    let cachedProducts = JSON.parse(data);

    // if data exist, send it as a response
    if (cachedProducts) {
      if (cachedProducts <= 0)
        res.status(404).json("Product data does not exist.");
      res.status(200).json(cachedProducts);
    } else {
      // pull data from db
      let products = await Product.getAll();

      // cache the data
      await client.set("products", JSON.stringify(products));

      // send data pulled from db
      if (products <= 0) res.status(404).json("Product data does not exist.");
      res.status(200).json(products);
    }
  } catch (err) {
    console.error("Error in getting product- " + err.message);
    res
      .status(500)
      .json({ error: "Got error in getAll controller of products" });
  }
};

// controller.getById = async (req, res) => {
//   //req.params.id
//   //https://www.sitepoint.com/caching-a-mongodb-database-with-redis/
//   try {
//     let data = await client.get("products");

//     if (data) res.send(data);
//     else {
//       let productData = await Product.getAll();

//       await client.set("products", JSON.stringify({ ...productData }));
//       let products = await client.get("products");
//       res.send(JSON.parse(products));
//     }
//   } catch (err) {
//     console.log("Error in getting product- " + err);
//     res.send("Got error in getAll");
//   }
// };

export default controller;

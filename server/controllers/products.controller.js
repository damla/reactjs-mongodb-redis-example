import Product from "../models/products.model.js";
import client from "../libs/redis/index.js";

const controller = {};

controller.getAll = async (req, res) => {
  try {
    let data = await client.get("products");

    if (data) res.status(200).send(data);
    else {
      let productData = await Product.getAll();

      await client.set("products", JSON.stringify({ ...productData }));
      let products = await client.get("products");
      res.status(200).send(JSON.parse(products));
    }
  } catch (err) {
    console.log("Error in getting product- " + err);
    res.status(500).send("Got error in getAll");
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

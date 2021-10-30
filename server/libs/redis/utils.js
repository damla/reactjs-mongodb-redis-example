import client from "./index.js";
import slugify from "../functions.js";

const hashProductId = async (value) => {
  const data = await value;

  data.map(async (item) => {
    // format as slug
    let name = slugify(item.name);

    // add all documents as set
    await client.sadd(name, item.products);
  });
};

export default hashProductId;

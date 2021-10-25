import { connectToDatabase } from "./mongodb.js";

export async function getData(page) {
  const { db } = await connectToDatabase();
  const [obj] = await db.collection(page).find({}).toArray();
  const data = await JSON.parse(JSON.stringify(obj));
  return console.log(data);
}

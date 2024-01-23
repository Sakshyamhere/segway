import productSchema from "@/models/productSchema";
import connectDB from "../lib/connectDB";

export default async function handler(req, res) {
  connectDB();
  const id = req.query.id
  if (req.method == "GET") {
    try {
     const product = await productSchema.find({_id: id})
      res.status(200).send({ done: true, product: product });
    } catch (error) {
      console.log(error);
    }
  }
}

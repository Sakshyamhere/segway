import productSchema from "@/models/productSchema";
import connectDB from "../lib/connectDB";

export default async function handler(req, res) {
  connectDB();
  if (req.method == "GET") {
    try {
     const product = productSchema.find({category:})
      res.status(200).send({ done: true, product: product });
    } catch (error) {
      console.log(error);
    }
  }
}

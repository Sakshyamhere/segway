import productSchema from "@/models/productSchema";
import connectDB from "../lib/connectDB";

export default async function handler(req, res) {
  connectDB();
  if (req.method == "POST") {
    try {
      const { title, body, category, image } = req.body;
      const product = new productSchema({
        title: title,
        body: body,
        category: category,
        image: image,
      });
      await product.save();
      res.status(200).send({ done: true, product: product });
    } catch (error) {
      console.log(error);
    }
  }
}

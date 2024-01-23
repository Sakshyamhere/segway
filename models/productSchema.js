import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  body: String,
  category: String,
  image : String,
  price : Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Product || mongoose.model("Product" , productSchema)
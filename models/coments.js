import mongoose from "mongoose";

const comentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  comen: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Coment", comentSchema);

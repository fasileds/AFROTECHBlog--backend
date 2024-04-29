import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import comentRouter from "./routes/coments.js";
import postRouter from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const dbURI =
  "mongodb+srv://blog:blog@cluster0.egcjui3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

(async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
})();
app.listen(3001, () => {
  console.log("the app is running on port 3001");
});
app.use("/api/user", userRouter);
app.use("/api/coment", comentRouter);
app.use("/api/post", postRouter);
app.use("/api/auth", authRoutes);

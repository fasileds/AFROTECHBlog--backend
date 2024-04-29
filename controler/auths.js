import User from "../models/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { name, emaile, password } = req.body;
    const existingUser = await User.findOne({ emaile });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      emaile,
      password: hashedPassword,
    });

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
export const login = async (req, res) => {
  const { emaile, password } = req.body;
  try {
    const user = await User.findOne({ emaile });
    if (!user) {
      return res.status(404).json("something is not working");
    }
    if (await bcrypt.compare(password, user.password)) {
      return res.json("log in sussfully");
    } else {
      return res.status(401).json("Invalid credentials");
    }
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json("Login failed");
  }
};

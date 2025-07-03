import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const login = async (req, res) => {
  console.log("LOGIN ROUTE HIT");
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
        console.error("User not found");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
        console.error("HOOS");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (err) {
    console.error("Login error");
    res.status(500).json({ message: err.message });
  }
};

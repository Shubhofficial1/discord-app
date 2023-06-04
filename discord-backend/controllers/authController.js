import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existsUser = await User.exists({ email: email.toLowerCase() });

    if (existsUser) {
      res.status(409).send("Email already in use.");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    if (user) {
      res.status(201).json({
        userDetails: {
          username: user.username,
          email: user.email,
          token: token,
        },
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong , try again!");
  }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          userId: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      return res.status(200).json({
        userDetails: {
          username: user.username,
          email: user.email,
          token: token,
        },
      });
    }
    return res.status(400).send("Invalid Credentials , please try again !");
  } catch (error) {
    res.status(500).send("Something went wrong . try again !");
  }
};

export { loginUser, registerUser };

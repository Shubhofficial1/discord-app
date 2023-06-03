import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// @desc    Register user & get token
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists

    const existsUser = await User.exists({ email: email.toLowerCase() });
    // if yes , send a 409(conflict) response & respective message

    if (existsUser) {
      res.status(409).send("Email already in use.");
    }

    // if no , encrypt the password

    const encryptedPassword = await bcrypt.hash(password, 10);

    // create user document & save in database
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    // create jwt token
    const token = "JWT Token";

    // send the response to client

    if (user) {
      res.status(201).json({
        userDetails: {
          email: user.email,
          username: user.username,
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
  res.send("Login Route...");
};

export { loginUser, registerUser };

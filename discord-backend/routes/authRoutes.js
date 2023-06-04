import express from "express";
const router = express.Router();
import { loginUser, registerUser } from "../controllers/authController.js";
import Joi from "joi";
import { createValidator } from "express-joi-validation";
import auth from "../middlewares/authMiddleware.js";

const validator = createValidator();

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});

router.route("/register").post(validator.body(registerSchema), registerUser);

router.route("/login").post(validator.body(loginSchema), loginUser);

router.route("/test").get(auth, (req, res) => {
  res.send("Protected route");
});

export default router;

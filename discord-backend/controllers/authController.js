// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  res.send("Login Route...");
};

// @desc    Register user & get token
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  res.send("Register Route...");
};

export { loginUser, registerUser };

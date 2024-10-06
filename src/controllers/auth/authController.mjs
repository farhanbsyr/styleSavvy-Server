import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../modals/user.mjs";
// register
export const registerController = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const hashPasword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPasword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration Succesfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

// login
const login = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

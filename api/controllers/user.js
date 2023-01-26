const UserSchema = require("../models/userModel");

module.exports.CREATE_USER = async (req, res) => {
  try {
    const user = new UserSchema({
      name: req.body.name,
      email: req.body.email,
    });

    const result = await user.save().exec();
    return res
      .status(200)
      .json({ response: "User was created successfully", user: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ response: "Failed" });
  }
};

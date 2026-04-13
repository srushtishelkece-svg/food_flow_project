const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if(user) res.json({message: "Login Success"});
    else res.status(400).json({message: "Invalid Credentials"});
  } catch (err) {
    res.status(500).json(err);
  }
};

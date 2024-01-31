const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const createJWT = user => {
  return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'});
}

const registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
}

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username});
    if (!user) throw new Error();
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) throw new Error();
    user.isOnline = true;
    await user.save();
    res.json(createJWT(user));
  } catch (error) {
    res.status(400).json(error);
  }
}

const logoutUser = async (req, res) => {
  const user = await User.findOne({username: req.user.username});
  user.isOnline = false;
  await user.save();
  res.json('Logout successful');
}

const getFriends = async (req, res) => {
  const user = await (
    User.findOne({username: req.user.username})
        .populate('friends')
        .exec()
  );
  res.json(user.friends);
}

const addFriend = async (req, res) => {
  const user = await User.findOne({username: req.user.username});
  const friend = await User.findById(req.body._id);
  user.friends.push(req.body);
  await user.save();
  friend.friends.push(req.user);
  await friend.save();
  await user.populate('friends');
  res.json(user.friends);
}

const unfriend = async (req, res) => {
  const user = await User.findOne({username: req.user.username});
  const friend = await User.findById(req.body._id);
  const i = user.friends.indexOf(friend._id);
  user.friends.splice(i, 1);
  await user.save();
  const j = friend.friends.indexOf(req.user._id);
  friend.friends.splice(j, 1);
  await friend.save();
  await user.populate('friends');
  res.json(user.friends);
}

const getAllUsers = async (req, res) => {
  const allUsers = await (
    User.find({username: {$nin: [req.user.username]}})
        .collation({locale: 'en', strength: 1})
        .sort({username: 'asc'})
  );
  res.json(allUsers);
}

module.exports = {
  addFriend,
  getAllUsers,
  getFriends,
  loginUser,
  logoutUser,
  registerUser,
  unfriend
}

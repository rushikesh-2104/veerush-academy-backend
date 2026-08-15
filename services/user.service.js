const User = require("../models/User");
const bcrypt = require("bcrypt");

// =========================
// Create User
// =========================
const createUser = async (data) => {

  // Check Email
  const exists = await User.findOne({
    email: data.email
  });

  if (exists) {
    throw new Error("Email already exists");
  }

  // Hash Password
  // Hash Password
const hashedPassword = await bcrypt.hash(data.password, 10);

const savedUser = await User.create({
  ...data,
  password: hashedPassword
});

const user = savedUser.toObject();

// Password response me mat bhejo
delete user.password;

return user;
};
// =========================
// Get All Students
// =========================

const getUsers = async () => {

  return await User.find({
    role: "student",
    isActive: true
  }).select("-password");

};

// =========================
// Get User By Id
// =========================
const getUserById = async (id) => {

  return await User.findById(id).select("-password");

};

// =========================
// Update User
// =========================
const updateUser = async (id, data) => {

  // Password change
  if (data.password) {

    data.password = await bcrypt.hash(
      data.password,
      10
    );

  }

  return await User.findByIdAndUpdate(
    id,
    data,
    {
      new: true
    }
  ).select("-password");

};

// =========================
// Delete User
// =========================
const deleteUser = async (id) => {

  return await User.findByIdAndDelete(id);

};

// =========================
// Active / Inactive
// =========================
const changeStatus = async (
  id,
  status
) => {

  return await User.findByIdAndUpdate(
    id,
    {
      isActive: status
    },
    {
      new: true
    }
  ).select("-password");

};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  changeStatus
};
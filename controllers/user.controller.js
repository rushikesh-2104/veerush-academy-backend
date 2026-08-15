const userService = require("../services/user.service");

// Create User
const createUser = async (req, res) => {
  try {

    const result = await userService.createUser(req.body);

    res.status(201).json({
      success: true,
      data: result
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// Get All Users
const getUsers = async (req, res) => {
  try {

    const users = await userService.getUsers();

    res.status(200).json({
      success: true,
      data: users
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// Get User By Id
const getUserById = async (req, res) => {
  try {

    const user = await userService.getUserById(req.params.id);

    res.status(200).json({
      success: true,
      data: user
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// Update User
const updateUser = async (req, res) => {
  try {

    const user = await userService.updateUser(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: user
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {

    await userService.deleteUser(req.params.id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// Change Active Status
const changeStatus = async (req, res) => {
  try {

    const user = await userService.changeStatus(
      req.params.id,
      req.body.isActive
    );

    res.status(200).json({
      success: true,
      data: user
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  changeStatus
};
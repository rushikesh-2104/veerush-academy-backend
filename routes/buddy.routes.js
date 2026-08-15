const express = require("express");

const router = express.Router();

const {

    createBuddy,
    getBuddyMessages,
    updateBuddy,
    deleteBuddy

} = require("../controllers/buddy.controller");

// Create
router.post("/", createBuddy);

// Get All
router.get("/", getBuddyMessages);

// Update
router.put("/:id", updateBuddy);

// Delete
router.delete("/:id", deleteBuddy);

module.exports = router;
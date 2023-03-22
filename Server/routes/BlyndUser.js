const express = require("express");
const {
  createProfile,
  getProfiles,
  getProfile,
  updateProfile,
  deleteProfile
} = require("../controllers/profileController");
const router = express.Router();

router.get("/", getProfiles);

//get a single profile
router.get("/:id", getProfile);

//post a profile
router.post("/", createProfile);

//Delete a profile
router.delete("/:id", deleteProfile);

//update a profile
router.patch("/:id", updateProfile);

module.exports = router;

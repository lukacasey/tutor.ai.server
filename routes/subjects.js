const express = require("express");
const {
  createSubject,
  getSubjects,
  deleteSubject,
} = require("../controllers/subjectController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all subjects routes
router.use(requireAuth);

// GET all subjects
router.get("/", getSubjects);

// POST a new subject
router.post("/", createSubject);

// Delete a Subject
router.delete("/:id", deleteSubject);

module.exports = router;

const Subject = require("../models/subjectsModel");
const mongoose = require("mongoose");

// get all subjects
const getSubjects = async (req, res) => {
  const user_id = req.user._id;

  const subjects = await Subject.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(subjects);
};

// create new subject
const createSubject = async (req, res) => {
  const { subject } = req.body;

  // add doc to db
  try {
    const user_id = req.user._id;
    const subjectName = await Subject.create({ subject, user_id });
    res.status(200).json(subjectName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete subject
const deleteSubject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such message" });
  }

  const subject = await Subject.findOneAndDelete({ _id: id });

  if (!subject) {
    return res.status(400).json({ error: "No such Message" });
  }

  res.status(200).json(subject);
};

module.exports = {
  getSubjects,
  createSubject,
  deleteSubject,
};

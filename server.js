// "The Net Ninja", "MERN stack Tutorial", https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=2&ab_channel=TheNetNinja
require("dotenv").config();
const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
const messagesRoutes = require("./routes/messages");
const subjectsRoutes = require("./routes/subjects");
const userRoutes = require("./routes/user");

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/messages", messagesRoutes);
app.use("/api/subjects", subjectsRoutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

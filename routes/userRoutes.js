const express = require("express");
const router = express.Router();
const User = require("../models/User");

//! get : RETURN ALL USERS
router.get("/users", (req, res) => {
  User.find()
    .then((data) => {
      res.status(200).json({ msg: "all users found", data });
    })
    .catch((err) => {
      res.status(500).json({ msg: err.message });
    });
});

//! POST :  ADD A NEW USER TO THE DATABASE
router.post("/users", (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((data) => {
      res.status(201).json({ msg: "user added successfully", data });
    })
    .catch((err) => {
      res.status(500).json({ msg: err.message });
    });
});

//! PUT : EDIT A USER BY ID
router.put("/users/:id", (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
    .then((data) => {
      data
        ? res.status(201).json({ msg: "user updated", data })
        : res.status(404).json({ msg: "user not found" });
    })
    .catch((err) => {
      res.status(500).json({ msg: err.message });
    });
});

//! delete : DELETE : REMOVE A USER BY ID
router.delete("/users/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((data) => {
      data
        ? res.status(200).json({ msg: "user deleted", data })
        : res.status(404).json({ msg: "user not found" });
    })
    .catch((err) => {
      res.status(500).json({ msg: err.message });
    });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Student = require("../models/Student");
const Subscription = require("../models/Subscription");
const SeatBooking = require("../models/SeatBooking");

// register a new Student

router.post("/students", async (req, res) => {
  try {
    const { name, email, password, phoneno, plan, seat, slot } = req.body;

    // basic validation

    if (!name || !email || !password) {
      return res.status(400).send("Name and email are required");
    }

    //check existing student

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).send("User already exist");
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new Student document
    const newStudent = new Student({ name, email, password: hashedPassword });
    await newStudent.save();

    const newSubscription = new Subscription({
      studentId: newStudent._id,
      plan,
      slot,
      startDate: new Date(),
    });

    await newSubscription.save();

    res
      .status(201)
      .send({ Student: newStudent, Subscription: newSubscription });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

/*
router.post("/subscription/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const { plan, timeSlot } = req.body;

    const allowedSlots = [
      "7:00 AM – 11:00 AM",
      "11:00 AM – 3:00 PM",
      "3:00 PM – 7:00 PM",
      "7:00 PM – 11:00 PM",
    ];

    if (!timeSlot || !allowedSlots.includes(timeSlot)) {
      return res.status(400).send("Invalid or missing time slot");
    }

    // Validate the subscription plan
    if (!plan || !["1 month", "3 month", "6 month"].includes(plan)) {
      return res.status(401).send("Not a valid plan");
    }

    // Find the student by ID
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(400).send("Student not found");
    }

    // Check if the student already has an active subscription
    const existingSubscription = await Subscription.findOne({
      studentId: student._id,
    });
    if (existingSubscription) {
      return res.status(400).send("Student already has an active subscription");
    }

    // Create the new subscription
    const newSubscription = new Subscription({
      studentId: student._id,
      plan,
      timeSlot, // Adding the timeSlot to the subscription
      startDate: new Date(),
    });

    await newSubscription.save();

    res.status(201).send({ student, subscription: newSubscription });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});
console.log("Student path resolved to:", require.resolve("../models/Student"));
*/

module.exports = router;

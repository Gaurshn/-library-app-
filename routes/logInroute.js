const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Student = require("../models/Student");
const Subscription = require("../models/Subscription");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).send("user not found");
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).send("invalid Credential");
    }

    const subscription = await Subscription.findOne({ studentId: student._id });
    if (!subscription) {
      return res.status(400).send("user not subscribed");
    }

    res.status(200).send({
      student: {
        name: student.name,
        email: student.email,
        slot: subscription.slot,
      },
      subscription: {
        plan: subscription.plan,
        endDate: subscription.endDate,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("error during login");
  }
});

module.exports = router;

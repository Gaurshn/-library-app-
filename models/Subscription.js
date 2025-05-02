const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  plan: {
    type: String,
    enum: ["1 Month", "3 Month", "6 Month"],
    required: true,
  },
  startDate: { type: Date, default: Date.now },
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);
module.exports = Subscription;

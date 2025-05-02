const express = require("express");
const app = express();
const connectDB = require("./db");
const bodyParser = require("body-parser");
const studentRoute = require("./routes/studentRoute");
const logInRoute = require("./routes/logInroute");
const cors = require("cors");

connectDB();
app.use(cors({ origin: "http://localhost:3000" })); // Replace with your frontend URL
app.use(express.json());

app.use("/api", logInRoute);
app.use("/api", studentRoute);

app.get("/", (req, res) => {
  res.send("Library Booking System is running!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

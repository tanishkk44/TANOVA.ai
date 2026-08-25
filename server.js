const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/ledtradee");

const User = mongoose.model("User", {
  email: String,
  password: String,
});

// SIGNUP
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User Registered");
});

// LOGIN
app.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (user) res.send("Success");
  else res.send("Fail");
});

// AI TRADE SIGNAL (basic logic)
app.get("/ai-signal/:symbol", (req, res) => {
  const signals = ["BUY", "SELL", "HOLD"];
  const random = signals[Math.floor(Math.random() * signals.length)];

  res.json({
    symbol: req.params.symbol,
    signal: random,
    entry: (Math.random() * 100).toFixed(2),
    exit: (Math.random() * 120).toFixed(2),
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
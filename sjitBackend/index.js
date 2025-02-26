const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const Signup = require("./models/signupSchema");
const cors=require("cors")
const app = express();
const PORT = 3001;

dotenv.config();
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MDB Connection Successful"))
  .catch((err) => console.error("Check your connection string:", err));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend Server</h1>");
});

app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newSignup = new Signup({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    await newSignup.save();
    console.log("Signup successful");
    res.status(201).json({ message: "Signup Successful", isSignup: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup Unsuccessful", isSignup: false });
  }
});

app.get("/getsignupdet", async (req, res) => {
  try {
    const signups = await Signup.find(); // Use `await` to fetch data
    console.log(signups);
    res.status(200).json(signups);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching signup details" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Signup.findOne({ email: email });
    console.log(existingUser)
    if (!existingUser) {
      return res.status(404).json({ message: "User not found, sign up first", isLoggedin: false });
    }

    const isValidPassword = await bcrypt.compare(password, existingUser.password); 
    console.log(existingUser)
    if (isValidPassword) {  
      res.status(200).json({ message: "Login successful", isLoggedin: true });
    } else {
      res.status(401).json({ message: "Incorrect Password", isLoggedin: false });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login Error", isLoggedin: false });
  }
});

app.listen(PORT, () => console.log('Server started successfully on port ${PORT}'));

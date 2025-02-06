//const express = require("express");
//const app = express();
//const PORT = process.env.PORT || 5000;

/*
app.get("/", (req, res) => {
  res.send("Hello, GCP! Your Node.js App is Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/online_form")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
    process.exit(1);  // Exit if connection fails
  });
// Middleware to parse JSON
app.use(express.json());

// Simple form submission route
app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;

  const formData = new FormData({
    name,
    email,
    message,
  });

  formData.save()
    .then(() => res.send("Form submitted successfully"))
    .catch((error) => res.status(500).send("Error submitting form: " + error));
});

// MongoDB Schema
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const FormData = mongoose.model("FormData", formSchema);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/
const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Example Route
app.get("/", (req, res) => {
    res.send("Server is Running!");
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

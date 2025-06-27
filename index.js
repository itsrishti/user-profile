require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const geoRoutes = require("./routes/geoRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/geo", geoRoutes);       // for /api/countries etc.
app.use("/api/user", userRoutes); // for /api/user POST

// Fallback route for testing
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

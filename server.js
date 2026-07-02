const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Connect MongoDB
mongoose.connect(
"mongodb+srv://monalibaraicse24_db_user:KGYW81CXozVIW2KG@cluster0.rmhdpgf.mongodb.net/?appName=Cluster0"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// API Route
app.post("/api/students", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();

        res.json({ message: "Student Saved Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error saving student" });
    }
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
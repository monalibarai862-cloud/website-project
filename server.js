const express = require("express");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// ================== HOME ==================
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// ================== ABOUT ==================
app.get("/about", (req, res) => {
    res.json({
        name: "Monali Barai",
        profession: "Engineering Student",
        branch: "Computer Science Engineering",
        year: "2nd Year"
    });
});

// ================== HOBBY ==================
app.get("/hobby", (req, res) => {
    res.json({
        hobby: "Dancing",
        description: "I enjoy dancing in my free time."
    });
});

// ================== FOOD ==================
app.get("/food", (req, res) => {
    res.json({
        food: "Pizza",
        taste: "Delicious",
        drink: "Cold Coffee"
    });
});

// ================== CONTACT ==================
app.get("/contact", (req, res) => {
    res.json({
        email: "monali@example.com",
        phone: "+91 9876543210"
    });
});

// ================== GREET (GET) ==================
app.get("/greet", (req, res) => {
    res.json({
        message: "Hello!",
        method: "GET"
    });
});

// ================== GREET (POST) ==================
app.post("/greet", (req, res) => {
    res.json({
        message: "Goodbye!",
        method: "POST"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// ================== GREET (POST) ==================
app.post("/greet", (req, res) => {
    res.json({
        message: "Goodbye!",
        method: "POST"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
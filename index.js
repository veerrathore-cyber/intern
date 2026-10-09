const express = require("express");
// Controller ko import karna (dhyan rakhein path aapke folder structure ke according ho)
const StudentController = require("./controllers/StudentController"); 

const PORT = 9229;
const app = express();

// Postman se JSON data receive karne ke liye middleware
app.use(express.json());

// Basic Route[cite: 7]
app.get("/", (req, res) => {
    res.send("Welcome to DPS School API");
});

// === Routes ===[cite: 8]
app.post("/student", StudentController.create);
app.get("/student", StudentController.readAll);
app.put("/student/:id", StudentController.update);
app.get("/student/:id", StudentController.readOne);
app.delete("/student/:id", StudentController.destroy);

// Server listen
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
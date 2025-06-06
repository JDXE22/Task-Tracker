import express from "express";
import dotenv from "dotenv/config";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const command = process.argv[2];
if (command === "start") {
  console.log("Starting the application...");
} 

app.get("/tasks", (req, res, next) => {
  try {
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

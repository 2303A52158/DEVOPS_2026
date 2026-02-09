const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = "./data.json";

// Initialize data file
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// GET expenses
app.get("/api/expenses", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

// POST expense
app.post("/api/expenses", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  const newExpense = { id: Date.now(), ...req.body };
  data.push(newExpense);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.status(201).json(newExpense);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

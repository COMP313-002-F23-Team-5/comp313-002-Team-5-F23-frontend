const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const path = require("path");

app.use(cors());
app.use(express.json()); // Body parser

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define routes here...

// This route serves the React app
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

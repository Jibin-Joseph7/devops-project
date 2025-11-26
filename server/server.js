const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks.js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/tasks', taskRoutes);

// TEST ROUTE
app.get('/', (req, res) => {
  res.send("API is running...");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000", process.env.PORT);
});

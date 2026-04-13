const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/foodflow')
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send("API Working");
});

app.listen(5000, () => console.log("Server running on port 5000"));

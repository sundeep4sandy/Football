const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected at ' + Date()))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

// // Use Routes
// app.use('/api/users', users);
// app.use('/api/profile', profile);
// app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

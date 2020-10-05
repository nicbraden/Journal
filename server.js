const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const notes = require('./routes/api/notes');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

app.use(cors());

// db config
const db = require('./config/keys').mongoURI;
// connect to db
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then (() => console.log('Mongo DB Connected...'))
    .catch(err => console.log(err));

//use routes
app.use('/api/notes', notes);

//connect to heroku or port 8080
const PORT = process.env.PORT || 8080;

app.listen(PORT, function (req, res) {
    console.log(`Listening on port ${PORT}`);
});
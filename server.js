const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const robots = require('./routes/api/robots')
const tasks = require('./routes/api/tasks')
const leaderboard = require('./routes/api/leaderboard')

//Bodyparser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Database config
const db = require('./config/keys').mongoURI;

//Connect to the database
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("mongoDB Connected..."))
    .catch(err => console.log(err));


//Routes
app.use('/api/robots', robots);
app.use('/api/tasks', tasks);
app.use('/api/leaderboard', leaderboard);

//Server static assets when in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
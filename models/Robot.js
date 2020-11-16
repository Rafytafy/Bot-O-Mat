const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema for Robot 
//When robot is created user doesnt not set score
//Zero is default, score will be used to set up leaderboard
const RobotSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    }
});

module.exports = Robot = mongoose.model('robot', RobotSchema);
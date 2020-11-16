const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema for Robot 
const TaskSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    eta: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true  
    }
});

module.exports = Task = mongoose.model('task', TaskSchema);
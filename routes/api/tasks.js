const express = require('express');
const router = express.Router();

const Task = require('../../models/Task');

//@route GET api/tasks
//@desc Get all tasks
//@access public

router.get('/', (req, res) => {
    Task.find()
        .then(items => res.json(items));
});


//@route POST api/tasks
//@desc Create a tasks
//@access Public

router.post('/', (req, res) => {
    const newTask = new Task({
        description: req.body.description,
        eta: req.body.eta,
        type: req.body.type
    });

    newTask.save().then(item => res.json(item));
});

module.exports = router;
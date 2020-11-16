const express = require('express');
const router = express.Router();

//Item Model
const Robot = require('../../models/Robot');

//@route GET api/robots
//@desc Get all robots
//@access public

router.get('/', (req, res) => {
    Robot.find()
    .then(items => res.json(items));
    
});

//@route POST api/robots
//@desc Create A robot
//@access Public

router.post('/', (req, res) => {
    const newRobot = new Robot({
        name: req.body.name,
        type: req.body.type
    });

    newRobot.save().then(item => res.json(item));
});

//@route PUT api/robots
//@desc Update score of a robot
//@access Public

router.put('/', (req, res) => {

    let addScore = parseInt(req.body.score)
    console.log(req.body)
    Robot.findOne({ name: req.body.name }, (err, foundRobot) => {
        Robot.findOneAndUpdate({name: req.body.name}, {score: foundRobot.score + parseInt(JSON.parse(req.body.score))}, (err, updatedRobot) => {
            if(err){
                console.log(err);
            }
            else{
                res.json("Score Updated");
            }
        })
       
    });
});


module.exports = router;
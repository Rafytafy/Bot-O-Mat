const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    Robot.find()
        .sort({score: -1})
        .then(items => res.json(items));
});

module.exports = router;
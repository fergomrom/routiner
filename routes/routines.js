var express = require('express');
var router = express.Router();
var Routine = require('../model/routine.js');

// READ
router.get('/api/routines', function(req, res) {
    Routine.find(function(err, routines) {
        if (err) res.send(err);
        res.json(routines);
    });

});

//CREATE
router.post('/api/routines', function(req, res) {
    Routine.create(req.body, function(err, routine) {
        if (err) res.send(err);
        res.json(routine);
    });
});

// UPDATE
router.put('/api/routines/:routine_id', function(req, res) {
    Routine.findByIdAndUpdate(req.params.routine_id, req.body, function(err, routine) {
        if (err) res.send(err);
        res.json(routine);
    });
});

// DELETE
router.delete('/api/routines/:routine_id', function(req, res) {
    Routine.findByIdAndRemove(req.params.routine_id, req.body, function(err, routine) {
        if (err) res.send(err);
        res.json(routine);
    });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var Category = require('../model/category.js');

// READ
router.get('/categories', function(req, res) {
    Category.find(function(err, categories) {
        if (err) res.send(err);
        res.json(categories);
    });

});

//CREATE
router.post('/categories', function(req, res) {
    Category.create(req.body, function(err, category) {
        if (err) res.send(err);
        res.json(category);
    });
});

// UPDATE
//router.put('/routines/:routine_id', function(req, res) {
    //Routine.findByIdAndUpdate(req.params.routine_id, req.body, function(err, routine) {
        //if (err) res.send(err);
        //res.json(routine);
    //});
//});

// DELETE
//router.delete('/routines/:routine_id', function(req, res) {
    //Routine.findByIdAndRemove(req.params.routine_id, req.body, function(err, routine) {
        //if (err) res.send(err);
        //res.json(routine);
    //});
//});

module.exports = router;

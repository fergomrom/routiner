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

// READ
router.get('/categories/:category_id', function(req, res) {
    Category.findById(req.params.category_id, function(err, categories) {
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

//UPDATE
router.put('/categories/:category_id', function(req, res) {
    Category.findByIdAndUpdate(req.params.category_id, req.body, function(err, category) {
        if (err) res.send(err);
        res.json(category);
    });
});

// DELETE
router.delete('/categories/:category_id', function(req, res) {
    Category.findByIdAndRemove(req.params.category_id, req.body, function(err, category) {
        if (err) res.send(err);
        res.json(category);
    });
});

module.exports = router;

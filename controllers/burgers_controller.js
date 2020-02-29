const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
//Routes
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    const hbsObject = { burgers: data };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    res.json(result);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, req.body.devoured, function(result) {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.put("/api/burgers", function(req, res) {
  burger.updateAll(req.body.devoured, function(result) {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  burger.delete(req.params.id, function(result) {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

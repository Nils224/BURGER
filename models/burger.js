// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selecAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  
  insertOne: function(objCriteria, cb) {
    orm.insertOne("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burger", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
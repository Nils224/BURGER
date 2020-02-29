// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(result) {
      cb(result);
    });
  },
  
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(result) {
      cb(result);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(result) {
      cb(result);
    });
  },

  // updateAll: function(devoured, cb) {
  //   orm.updateAll("burgers", devoured, function(result) {
  //     cb(result);
  //   });
  // },

  deleteOne: function(id, cb) {
    orm.deleteOne("burgers", id, function(result) {
      cb(result);
    });
  }
};

module.exports = burger;
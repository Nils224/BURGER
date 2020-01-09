const connection = require("./connection.js");

selectAll()
insertOne()
updateOne()


const orm = {
    selectAll: function(table, cb) {
      const queryString = "SELECT * FROM ??";
  
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    insertOne: function(table, objCriteria, cb) {
      const queryString = "INSERT INTO ?? SET ?";
  
      connection.query(queryString, [table, objCriteria], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    
    updateOne: function(table, objColVals, condition, cb) {
      const queryString = "UPDATE ?? SET ? WHERE ?";
  
      connection.query(queryString, [table, objColVals, condition], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    }
};
  
module.exports = orm;
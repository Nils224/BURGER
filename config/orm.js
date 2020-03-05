const connection = require("./connection");

// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// // Helper function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//   var arr = [];

//   // loop through the keys and push the key/value as a string int arr
//   for (var key in ob) {
//     var value = ob[key];
//     // check to skip hidden properties
//     if (Object.hasOwnProperty.call(ob, key)) {
//       // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//       // e.g. {sleepy: true} => ["sleepy=true"]
//       arr.push(key + "=" + value);
//     }
//   }

//   // translate array of strings to a single comma-separated string
//   return arr.toString();
// }

const orm = {
  selectAll: function(table, cb) {
    const queryString = "SELECT * FROM ??";

    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
      //console.log(result);
      cb(result);
    });
  },

  insertOne: function(table, burger_name, cb) {
    const queryString = "INSERT INTO ?? (burger_name) VALUES (?)";

    connection.query(queryString, [table, burger_name], function(err, result) {
      if (err) {
        throw err;
      }
      //console.log(result);
      cb(result);
    });
  },
  
  updateOne: function(table, id, devoured, cb) {
    devoured = devoured == "true";
    const queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";

    connection.query(queryString, [table, devoured, id], function(err, result) {
      if (err) {
        throw err;
      }
      //console.log(result);
      cb(result);
    });
  },

  updateAll: function(table, devoured, cb) {
    const queryString = "UPDATE ?? SET devoured= ?";
    connection.query(queryString, [table, devoured], function(err, result) {
      if (err) {
        throw err;
      }
      // console.log(result);
      cb(result);
    });
  },

  deleteOne: function(table, id, cb) {
    // const queryString = "DELETE FROM ?? WHERE id= ?";
    const queryString = "DELETE FROM ?? WHERE id = ?";

    connection.query(queryString, [table, id], function(err, result) {
      if (err) {
        throw err;
      }
      // console.log(result);
      cb(result);
    });
  }
};
  
module.exports = orm;
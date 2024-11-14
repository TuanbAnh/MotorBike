const db = require("../config/database");

exports.getAllTodos = function (callback) {
  db.query("SELECT * FROM xe", callback);
};

exports.getTodoById = function (id, callback) {
  db.query("SELECT * FROM xe WHERE bienxe = ?", [id], callback);
};

exports.createTodo = function (newTodo, callback) {
  db.query("INSERT INTO xe SET ?", newTodo, callback);
};

exports.updateTodo = function (id, updatedTodo, callback) {
  db.query("UPDATE xe SET ? WHERE bienxe = ?", [updatedTodo, id], callback);
};

exports.deleteTodo = function (id, callback) {
  db.query("DELETE FROM xe WHERE bienxe = ?", [id], callback);
};

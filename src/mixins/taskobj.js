'use strict';

var store = require('store');

module.exports = function(task) {
var tasks = store.get('tasks');
console.log(tasks);
  return tasks.filter(function(t) {
    return t.id === task;
  })[0];
};


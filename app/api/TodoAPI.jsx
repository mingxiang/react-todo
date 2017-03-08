import $ from 'jquery';

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    let stringTodos = localStorage.getItem('todos'),
        todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  }
};

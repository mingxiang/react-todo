import $ from 'jquery';

module.exports = {
  filterTodos: function (todos, showCompleted, searchText){
    let filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter(todo => (!todo.completed || showCompleted));
    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      if(searchText.length === 0){
        return todo;
      }

      return todo.text.toLowerCase().indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
        if(!a.completed && b.completed) {
          return -1
        } else if (a.completed && !b.completed){
          return 1;
        } else {
          return 0;
        }
    });

    return filteredTodos;
  }
};

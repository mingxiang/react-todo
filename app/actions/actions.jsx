export let setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// toggle show completed
export let toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export let toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export let addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

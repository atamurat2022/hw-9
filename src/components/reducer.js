export const reducer = (state, action) => {
  switch (action.type) {
    case "value": {
      return { ...state, inputValue: action.payload }
    }

    case "ADD": {
      return {
        ...state,
        todos: [...state.todos, action.payload],
        inputValue: "",
      }
    }

    case "DELETE": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    }

    case "COMPLETE": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      }
    }

    case "EDIT": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, title: state.editInputValue }
            : { ...todo }
        ),
      }
    }
    case "EditValue": {
      return {
        ...state,
        editInputValue: action.payload,
      }
    }

    default: {
      return state
    }
  }
}

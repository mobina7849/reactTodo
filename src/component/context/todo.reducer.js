//reducer miad state ro bar asas yeseri action update mikone
//paylod khodemon pas midim va ettelaeati hastesh ke gharare baraye update behesh pas bedim
///type noe action ro mide
function TodoReducer(state, action) {
    const { type, payload } = action;
        switch(type){
            case todoActions.add:
                return [...state,payload]
            case todoActions.delete:
                return state.filter(todo=>todo.id!==payload.id)
            case todoActions.update:
                return state.map(todo=>todo.id===payload.id ?payload :todo)
            case todoActions.check:
                return state.map(todo=>todo.id===payload.id ?{...todo,completed:!todo.completed} :todo)
            default:
              return  state
        }
  }
  
  const todoActions = {
    add: "ADD_TODO_ITEM",
    delete: "REMOVE_TODO_ITEM",
    update: "UPDATE_TODO_ITEM",
    check: "COMPLETED_TODO_ITEM",
  };
  
  export { todoActions, TodoReducer };
  
import React from "react";
import { TodoReducer } from "./todo.reducer";
///dar createContext ldai har meghdar ya motghayyeri dad
export const TodoContext = React.createContext({
  //maghadir defauit
  todos: [],
  todoDispatch: () => {},
});

const TodoProvider = ({ children }) => {
  const [todos, todoDispatch] = React.useReducer(TodoReducer, []);
 //har context yek provider darad ke mesl ye khorshid componentharo dar bar migire vaghti to app tarif beshe 
  return (
    <TodoContext.Provider
      value={{
        todos,
        todoDispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

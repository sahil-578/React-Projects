import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id : 1,
            todoMsg : "Msg ",
            checked : false ,
        }
    ],

    TodoAdd : (todoMsg) => {} ,
    TodoDelete : (id) => {} ,
    TodoUpdate : (id, todoMsg) => {},
    TodoToggle : (id) => {}

})

export const TodoProvider = TodoContext.Provider

export const useTodoContext = () => {
    return  useContext(TodoContext);
}
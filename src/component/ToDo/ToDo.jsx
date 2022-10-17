import React from "react";
import './Todo.style.css';
import { useDispatch } from "react-redux";
import { checkTodo } from "../redux/reducer/todo.slice";
const ToDo =({todo,onClick,onClickUpdate}) =>{
    //const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
    const handleCompeleted=(id)=>{
        dispatch(checkTodo(id))
    }
    console.log(todo)
    return(
        <div className="card" style={{background:todo.color,opacity:todo.compeleted? '0.5': 'unset'}}>
            <label >done</label>
            <input type={'checkbox'} checked={todo.compeleted}  onClick={()=>handleCompeleted(todo.id)}/>
            <h2 style={{textDecoration:todo.compeleted? 'line-through': 'unset'} }>{todo.title}</h2> 
            <p>{todo.description}</p>
            <button onClick={onClick} className="btnDelete">delete me</button>
            <button onClick={onClickUpdate} className="btnUpdate">update me</button>
            

        </div>
    )
}

export default ToDo 
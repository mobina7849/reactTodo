import React from "react";
import './Todo.style.css'
const ToDo =({id,title,description,onClick,onClickUpdate}) =>{
    return(
        <div className="card">
            <h1>{id}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onClick} className="btnDelete">delete me</button>
            <button onClick={onClickUpdate} className="btnUpdate">update me</button>

        </div>
    )
}

export default ToDo 
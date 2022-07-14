import React from "react";
import Todolist from "../Todolist/Todolist";
import Todonewitem from "../Todonewitem/Todonewitem";
import { TodoProvider } from "../../context/Todocontext"
import './Todocontainer.scss' 

const  Todocontainer = ()=>{
    return(
        <div className="Todocontainer">
            <TodoProvider>
                <span className="header">To Do App</span>
                <Todonewitem/>
                <Todolist/>
            </TodoProvider>
        </div>
        
    )
}

export default Todocontainer
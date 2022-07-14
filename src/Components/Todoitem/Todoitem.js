import './Todoitem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Todoitem = ({id,title,completed,handleUpdate,handleDelete})=>{
    const [text,setText] = useState('none')

    return (
        <div className="Todoitem">
        <div className="upper">
        <span style={{ "text-decoration" : text }}>{ title }</span>
        </div>
        <div className="lower">
        {/* <input type="checkbox" name="checkbox"  checked= {completed} readOnly/> */}
        <div className="btn">   
        <div className="icons update" a-key={id} onClick={(e)=>handleUpdate(e)}><FontAwesomeIcon  icon={faPen} style={{color: "white", fontSize:12}}/></div>
        <div className="icons" a-key={id} onClick={(e)=>handleDelete(e)}><FontAwesomeIcon icon={faTrash} style={{color: "white", fontSize:12}}/></div>
        </div>
        </div>
        </div>
    )
}

export default Todoitem
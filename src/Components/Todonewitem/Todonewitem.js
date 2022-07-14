import { useContext } from "react"
import Todocontext from "../../context/Todocontext"
import './Todonewitem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Todonewitem = ()=>{

    const { handleNewitem,handleChange,handleCheckbox,status,title,itemid } = useContext(Todocontext)
    return(
        <div className="Todonewitem">
            <form a-key={itemid} onSubmit={ (e)=> handleNewitem(e)}>
            <input type="text" name="newitem" value = {title} onChange={ (e)=>handleChange(e)} placeholder="Enter the item"/>
            {/* <input type="checkbox" checked = { status } onChange={ (e)=>handleCheckbox(e) }/> */}
            <button type="submit" className="icons"><FontAwesomeIcon icon={faPlus} style={{color: "white", fontSize:12}}/></button>
            </form>
        </div>
    )
}

export default Todonewitem
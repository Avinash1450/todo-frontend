import { useContext } from "react/cjs/react.development"
import Todocontext from "../../context/Todocontext"


const Message = ()=>{
    
    const  message = useContext(Todocontext)

    return(
        <h3>{message}</h3>
    )
}

export default Message
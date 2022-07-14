import Todoitem from '../Todoitem/Todoitem'
import { useContext } from 'react'
import Todocontext from '../../context/Todocontext'

const Todolist = ()=>{
    const { todo,handleSubmit,handleDelete,handleUpdate,text }  = useContext(Todocontext)
    return(
        todo.map(({id,title,completed})=>{
            return(
                <Todoitem key={id} id={id} title={title} completed={completed} handleSubmit={handleSubmit} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
            )
        })
    )
}



export default Todolist
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React, { createContext,useState,useEffect,useCallback } from "react";
import { compileAsync } from "sass";

const Todocontext = createContext()

export default Todocontext


const TodoProvider =({children})=>{
    const [todo, setTodo] = useState([])
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState(false)
    const [itemid, setItemid] = useState(null)
    const [message, setMessage] = useState('')
    


    var handleChange = (e)=>{
        setTitle(e.target.value)
    }
    

    var handleCheckbox = (e)=>{
        setStatus(status => !status)
    }
    var handleUpdate = useCallback((e)=>{
        let id = e.target.getAttribute("a-key")
        let response = fetchDetail(id)
        response.then(data=>{
            setItemid(data.id)
            setTitle(data.title)
            setStatus(data.completed)
        })

    },[title,status])

    const handleDelete =  useCallback((e)=>{
        let id = e.target.getAttribute("a-key")
        console.log(e)   
        fetch(`http://127.0.0.1:8000/tododetails/${id}`,{
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json'
                }
            }).then(res=>{
                if(res.ok){
                    return res.json()
                }
                throw new Error("Error while deleting")
            }).then(data=>{
                setMessage(data.message)
                console.log(data.message)
            }).catch(e=>console.log(e))
    },[message])
  

    const handleNewitem = useCallback ((e)=>{
        e.preventDefault()
        let id = e.target.getAttribute("a-key")
        if(id){
            fetch(`http://127.0.0.1:8000/tododetails/${id}`,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify( { title : title , completed : status })
            }).then(res=>{
                if (res.ok){
                    return res.json()
                }
                throw new Error("Error in updating item")
            }).then(data=>(data)).catch(e=>console.log(e))
        }
        else{
            fetch('http://127.0.0.1:8000/todo/',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify( { title : title, completed : status } )
        }).then(res=>{
            if (res.ok){
                return res.json()
            }
            throw new Error("Error in handling new item")
        }).then(data=>data).catch(e=>console.log(e))
    }
        setItemid(null)
        setTitle('')
        setStatus(false)
    },[title,status])

    function fetchData(){
        return fetch("http://127.0.0.1:8000/todo/").then((res)=> {
            if (res.ok){
                return res.json()
            }
            throw new Error("Something went wrong")
        })
        }
    
    function fetchDetail(id){
        return fetch(`http://127.0.0.1:8000/tododetails/${id}`).
        then(res=>{
            if (res.ok){
                return res.json()
            }
            throw new Error("Something went wrong")
             }).then(data=>data).catch(e=>console.log(e))
    }

    useEffect(()=>{
        fetchData().then(data=>setTodo(data)).catch(e=>console.log(e))
    },[handleNewitem,handleDelete,handleUpdate])

    let context = {
        todo:todo,
        handleUpdate:handleUpdate,
        handleNewitem:handleNewitem,
        handleDelete:handleDelete,
        handleChange:handleChange,
        handleCheckbox:handleCheckbox,
        itemid:itemid,
        status:status,
        title:title,
        message:message,
        fetchData:fetchData
    }

  
    return(
        <Todocontext.Provider value={ context }>
            {children}
        </Todocontext.Provider>
    )
}

export {TodoProvider}
import React, { useEffect } from 'react'
import "./Todo.css"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { useState } from 'react'
import AddItem from './AddItem'
const Todo = () => {
  const[addItem,setAddItem]=useState('');
  const [listData,setlistData]=useState(JSON.parse(localStorage.getItem("todolist")) || []);
  const handleDelete = (id) =>{
    const listItem=listData.filter((data)=>data.id!=id);
    setlistData(listItem);
    localStorage.setItem("todolist",JSON.stringify(listItem));
  }
  const addToList = (task) =>{
    const id=listData.length?listData[listData.length-1].id+1 :1
    const newToDo={id,task};
    const listItem=[...listData,newToDo];
    setlistData(listItem);
    localStorage.setItem("todolist",JSON.stringify(listItem));
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!addItem) return;
    addToList(addItem);
    setAddItem('');
  }
  return (
    <main className='container'>
      <AddItem addItem={addItem} setAddItem={setAddItem} handleSubmit={handleSubmit} />
      {listData.length?      
      <ul type="none">
        {listData.map((item)=>(
          <li key={item.id} className='items'>
            <label>{item.task}</label>
            <RiDeleteBin5Fill onClick={()=>handleDelete(item.id)}/>
          </li>
        ))}
      </ul>
      :(
        <p>Empty!Add a task</p>
      )}
    </main>
  )
}
export default Todo
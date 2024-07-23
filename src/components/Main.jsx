import React, { useEffect } from 'react'
import { useState } from 'react'
import Tasks from './Tasks';
import Sidebar2 from './Sidebar2';
const Main = () => {
    const [tasks,setTasks]=useState([]);
    const[text,setText]=useState('');
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('task'));
        if (storedTodos) {
          setTasks(storedTodos);
        }
      }, []);
    function addTask(text){
        const newTask={
            id:Date.now(),
            text,
            status:false
        };
        setTasks([...tasks,newTask]);
      setText('')
    }
    function deleteTask(id){
        setTasks(tasks.filter(task=>task.id!==id));
    }
    useEffect(()=>{
        localStorage.setItem('task',JSON.stringify(tasks));
    },[tasks])

    function handleStatus(id){
        setTasks(tasks.map(task => {
            if (task.id === id) {
            return {...task, status: !task.status};
            } else {
            return task;
            } 
            }));
    }
  return (
    <div className='main'>
        <div className="addTask">
            <input value={text} 
            onChange={e=>setText(e.target.value)}
            type="Add a new Task" />
            <button onClick={()=>addTask(text)}>+</button>
        </div>
       
        {tasks && tasks.map(task=>
 <Tasks key={task.id} task={task} status={task.status} deleteTask={deleteTask} handleStatus={handleStatus}/>
        )}
       
    </div>
  )
}

export default Main
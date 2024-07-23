import React from 'react'

const Tasks = ({task,deleteTask,handleStatus}) => {
  return (
    <div>
                <div className="showTask">
            <div className="singleTask">
                <input type="checkbox" onChange={handleStatus}/>
                <p>{task.text}</p>
                <button onClick={()=>deleteTask(task.id)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Tasks
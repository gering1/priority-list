import React from 'react'
import TaskBar from './TaskBar'
import TaskTable from './TaskTable'
import {useState} from 'react'

const TodoList = () => {
   
   
    const [priority, setPriority] = useState("High Priority")
    const [task,setTask] = useState("")
    const [tasks, setTasks] = useState([])
    const [isDeleted,setDeleted] = useState(false)
    return (
        //render user input section as taskbar
        <div>    
        
           <TaskBar  isDeleted = {isDeleted} tasks = {tasks} setTasks = {setTasks} setPriority = {setPriority} priority = {priority} task = {task} setTask = {setTask}></TaskBar> 
           <TaskTable setTasks = {setTasks} setDeleted = {setDeleted} tasks = {tasks}></TaskTable>
        
        </div>
        //render task table as 
    )
}

export default TodoList

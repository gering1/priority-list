import React from 'react'
import './App.css'

import { Button } from 'antd'

import Select from '@material-ui/core/Select'
const TaskBar = ({clearList,id,priority,setPriority,task,setTask,setTasks,tasks,isDeleted}) => {
    
    return (
        <div className = "upper-container">
        <div className = "taskbar-container">
            <input variant = "outlined"className = 'task-input' onChange = {(e) => setTask(e.target.value)} placeholder = "Enter task"/>
            <select variant = "outlined" value = {priority} className = 'priority-select' onChange = {(e) => setPriority(e.target.value)}>
                <option value="High Priority">High Priority</option>
                <option value = "Medium Priority">Medium Priority</option>
                <option value = "Low Priority">Low Priority</option>
            </select>
            <Button type = "dashed"  shape = "round" className = 'upper-button' onClick = {() => setTasks([...tasks, {"id":Date.now(),"task":task, "priority":priority,"editIndex":-1}])}>Add</Button>
            <Button  type = "primary" className = 'upper-button' onClick = {() => setTasks([])}>Clear List</Button>
        </div>
        </div>
    )
}

export default TaskBar

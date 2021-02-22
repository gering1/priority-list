import React from 'react'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'
import {useEffect,useState} from 'react'
import TodoList from './TodoList'
import {FaPencilAlt} from 'react-icons/fa'
import {BsCheck} from 'react-icons/bs'
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import { Input } from 'antd';


const TaskTable = ({setTasks, tasks,setDeleted}) => {
    const [editIdx,setEditIdx] = useState(-1)
    const [currentRow, setCurrentRow] = useState(null)
    const [currentlyEditing, setCurrentlyEditing] = useState(null)
    const [editingText, setEditingText] = useState("")
    const [editingPriority, setEditingPriority] = useState("")
    const removeItem = (id) => {
        const res = tasks.filter(task => task.id !== id)
        setTasks(res)
    }   
    
    const saveEdit = (row) => {
      /*
        editingText === "" ? 
          setEditingText(row.task) : <></>
        */
          
        const editedTasks = [...tasks].map((task) => {
            if(task.id === row.id) {
                task.task = editingText
            }
            return task
        })
        
        editingPriority === "" ? 
           row.priority = row.priority : row.priority = editingPriority
       
       console.log(row.task)
       setTasks(editedTasks)
       setCurrentlyEditing(null)
       setEditingText(null)
    }
    const columns = [
        {
          title: 'task',
          dataIndex: 'task',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'priority',
          dataIndex: 'priority',
        },
        
      ];
    return (
      <div style = {{color:"white"}} className = 'task-list-container'>

      <table style = {{padding: "10px",color:"white"}} size = "medium"className="task-list" aria-label="caption table">
        <thead  style = {{color:"white"}} className = "header-row">
          <tr style = {{color:"white"}} >
            <th style = {{overflowX: "auto",minWidth:"200px"}}><strong>Task</strong></th>
            <th style = {{minWidth: "200px"}} ><strong>Priority</strong></th>
          
          </tr>
        </thead>
        <tbody style = {{border:"none"}}>
          {tasks.map((row) => (
            <tr key={row.id}>
             
              { currentlyEditing === row.id ?
                   
                  <>
                  
                   <td style = {{ overflowX :"auto", minWidth: "50px", maxWidth: "50px"}}><Input /*defaultValue = {row.task}*/ className = "table-input" type = "text" onChange= {(e) => setEditingText(e.target.value)} /></td>
                  <td><select class = "edit-priority-select"  value = {editingPriority} onChange = {(e) => setEditingPriority(e.target.value)}>
                    <option>High Priority</option>
                    <option>Medium Priority</option>
                    <option>Low Priority</option>
                    </select></td>
                  </>
                   : 
                   <>
                   <td>{row.task}</td>
                   <td style = {{ overflowX :"auto", minWidth: "50px", maxWidth: "50px"}}>{row.priority}</td>
                   </>
              }
           
              <td ><DeleteButton removeItem = {removeItem} id = {row.id}></DeleteButton></td>

              {
                  row.id === currentlyEditing ? 
                      <td style = {{padding: "0px",margin: "0px"}}><BsCheck size = {30} onClick = {() => saveEdit(row)} style = {{ cursor: 'pointer'}}></BsCheck></td> :
                      <td><FaPencilAlt size = {20} onClick = {() => setCurrentlyEditing(row.id)} style = {{ cursor: 'pointer'}}></FaPencilAlt></td>
                  }
            </tr>
          ))}
        </tbody>
       
      </table>
      </div>
       
    
     
    )
}

export default TaskTable

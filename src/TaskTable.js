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
    const removeItem = (id) => {
        const res = tasks.filter(task => task.id !== id)
        setTasks(res)
    }   
    
    const saveEdit = (id) => {
        const editedTasks = [...tasks].map((task) => {
            if(task.id === id) {
                task.task = editingText
            }
            return task
        })
        console.log(editingText)
       setTasks(editedTasks)
       setCurrentlyEditing(null)
       setEditingText("")
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
            <th style = {{minWidth:"200px"}}><strong>Task</strong></th>
            <th style = {{minWidth: "200px"}} ><strong>Priority</strong></th>
          
          </tr>
        </thead>
        <tbody style = {{border:"none"}}>
          {tasks.map((row) => (
            <tr key={row.id}>
              <td style = {{ overflowX :"auto", minWidth: "50px", maxWidth: "50px"}}>{ currentlyEditing === row.id ?
                   <Input className = "table-input" type = "text" onChange= {(e) => setEditingText(e.target.value)} />: row.task}</td>
              <td style = {{minWidth: "50px", maxWidth: "60px",xOverflow :"auto"}}>{row.priority}</td>
              <td ><DeleteButton removeItem = {removeItem} id = {row.id}></DeleteButton></td>
              {
                  row.id === currentlyEditing ? 
                      <td style = {{padding: "0px",margin: "0px"}}><BsCheck size = {30} onClick = {() => saveEdit(row.id)} style = {{ cursor: 'pointer'}}></BsCheck></td> :
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

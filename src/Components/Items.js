import React, { useContext, useState} from 'react'
import { taskContext } from './ItemList'
import { activeContext } from '../App'

function Items({tab}) {
  const [active,setActive] = useContext(activeContext)
  const [task,setTask] = useContext(taskContext)
  const handleAdd = () => {
    let name = document.getElementById("activity-name").value
    let deadline = document.getElementById("deadline").value
    let description = document.getElementById("description").value
    if(name && deadline){
      setTask(
        [...task,{
        name,deadline,description
        }])
    }
    setActive(false)
  }

  return (
    <div id='item-form'>
      <div className='blur-bg'></div>
      <div className="rendered-form">
        <div>
          <h2>Add Entry</h2>
        </div>
        <div className="formbuilder-text form-group">
          <label className="formbuilder-text-label">
            <p>Task name</p>
            <input type="text" id='activity-name' className="form-control" />
          </label>
        </div>
        <div className="formbuilder-date form-group">
          <label className="formbuilder-date-label">
            <p>Deadline</p>
            <input type="date" id='deadline' className="form-control"/>
          </label>
        </div>
        <div className="formbuilder-textarea form-group">
          <label className="formbuilder-textarea-label">
            <p>Description</p>
            <textarea type="textarea" id='description' className="form-control" defaultValue={""} />
          </label>
        </div>
        <div className="formbuilder-button form-group">
          <div onClick={()=>handleAdd()} className="btn btn-primary">Submit</div>
        </div>
      </div>

    </div>
  )
}

export default Items

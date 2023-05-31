import React, { useContext, useEffect, useState } from 'react'
import { activeContext } from './ItemList'

function Items({tab}) {
  const [active,setActive] = useContext(activeContext)
  const [item,setItem] = useState([])
  const handleAdd = () => {
    const name = document.getElementById("activity-name").value
    const deadline = document.getElementById("deadline").value
    const desc = document.getElementById("description").value
    if(!name){
      alert("Task name cannot be empty")
    }
    if(!deadline){
      alert("Deadline cannot be empty")
    }
    if(name && deadline){
      const values = {
        name,
        deadline,
        desc
      }
      localStorage.setItem(tab,JSON.stringify(values))
    }
    setActive(false)
  }


  return (
    <div id='item-form'>
      <div className="rendered-form">
        <div>
          <h1>Add Entry</h1>
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

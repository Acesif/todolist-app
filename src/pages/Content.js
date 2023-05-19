import React, { useContext, useEffect, useState } from 'react'
import { context } from '../App';
const Content = () => {
  const [task,setTask] = useState("");
  const [tab,setTab] = useContext(context)
  return (
    <div className='content'>
        <h2>Checklist</h2>
        <div>
          <div className="content-container mb-3">
            <label className="form-label">
              <input type="text" onChange={(e)=>setTask(e.target.value)} value={task} className="form-control" />
              <button onClick={()=> setTask("")}>Add</button>
              {
                useEffect(()=>{
                  localStorage.setItem(tab,task)
                },[tab,task])
              }
            </label>
          </div>
          </div>
        </div>
  )
}

export default Content
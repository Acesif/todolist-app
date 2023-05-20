import React, { useContext, useEffect, useState } from 'react'
import { context } from '../App';
const Content = () => {
  const [task,setTask] = useState("");
  const [tab,setTab] = useContext(context)
  const projectList = JSON.parse(localStorage.getItem("Sections"))
  const projectTitle = projectList[tab].value;
  const [itemList, setItemList] = useState([])
  const addToList = (task) => {
    setItemList([...itemList,task])
  }
  useEffect(()=>{
    localStorage.setItem(`${tab}`,JSON.stringify(itemList))
  },[itemList,tab])
  return (
    <div className='content'>
        <h2>Checklist</h2>
        <h3>Tab: {projectTitle}</h3>
        <div>
          <div className="content-container mb-3">
            <label className="form-label">
              <input type="text" onChange={(e)=>setTask(e.target.value)} value={task} className="form-control" />
              <button onClick={()=> addToList(task)}>Add</button>
              {
                useEffect(()=>{
                  localStorage.setItem(tab,task)
                },[tab,task])
              }
            </label>
          </div>
        </div>
        {
          itemList.map((i)=>(
            <div className="form-check item-list">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />
                {i}
              </label>
            </div>
          ))
        }
    </div>
  )
}

export default Content
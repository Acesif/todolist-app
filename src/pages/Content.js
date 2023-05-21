import React, { useContext, useEffect, useState } from 'react'
import { context } from '../App';
const Content = () => {
  const [task,setTask] = useState("");
  const [tab,setTab] = useContext(context)
  const projectList = JSON.parse(localStorage.getItem("Sections"))
  const projectTitle = projectList[tab].value;
  const [itemList, setItemList] = useState([])
  let items;
  const addToList = () => {
    let task = document.getElementById("input-text").value
    setItemList([...itemList,task])
  }
  useEffect(()=>{
    localStorage.setItem(`${tab}`,JSON.stringify(itemList))
  },[itemList,tab])

  useEffect(()=>{
    localStorage.setItem(tab,task)
  },[tab,task])
  
  if(localStorage.getItem(`${tab}`)){
    items = JSON.parse(localStorage.getItem(`${tab}`))
  }
  return (
    <div className='content'>
        <h2>Checklist</h2>
        <h3>Tab: {projectTitle}</h3>
        <div>
          <div className="content-container mb-3">
            <label className="form-label">
              <input type="text" className="form-control" id='input-text' />
              <button onClick={()=> addToList()}>Add</button>
            </label>
          </div>
        </div>
        {
          items?.map((i)=>(
            <div key={i} className="form-check item-list">
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
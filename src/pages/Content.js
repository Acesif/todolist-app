import React, { useContext, useEffect, useState } from 'react'
import { context } from '../App';
const Content = () => {
  const [tab,setTab] = useContext(context)
  const projectList = JSON.parse(localStorage.getItem("Sections"))
  const projectTitle = projectList[tab].value;
  const [itemList, setItemList] = useState([])

  const addToList = () => {
    let value = document.getElementById("input-text").value
    setItemList([...itemList,value])
  }
  
  // need to set a useEffect such that the localstorage gets updated when itemlist is updated
  useEffect(()=>{
    localStorage.setItem(`${tab}`,JSON.stringify(itemList))
  },[itemList])

  useEffect(()=>{
    if(localStorage.getItem(`${tab}`)){
      setItemList(JSON.parse(localStorage.getItem(`${tab}`)))
    }
    else{
      setItemList([])
    }
  },[setItemList,tab])

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
          itemList?.map((i)=>(
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
import React, { useContext, useEffect, useState } from 'react'
import ItemList from './ItemList'
import { Context } from '../App'

function Content() {
  const [tab, setTab] = useContext(Context)
  const [title,setTitle] = useState()
  useEffect(()=>{
    const project_name = JSON.parse(localStorage.getItem("Sections"))
    setTitle(project_name[tab]?.value);
  },[tab])
  return (
    <div className="content">     
        <h1>{title}</h1>
        <ItemList tab={tab}/>
    </div>
  )
}

export default Content

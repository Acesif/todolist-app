import React, { createContext, useEffect, useState } from 'react'
import Items from './Items'

export const activeContext = createContext();
export const taskContext = createContext();

function ItemList({tab}) {
  const [item,setItem] = useState([])
  const [active,setActive] = useState(false)
  const [task,setTask] = useState()
  const [taskList,setTaskList] = useState([])
  

  return (
    <div>
      <taskContext.Provider value={[task,setTask]}>
        <div className='add-to-list'>
          <div onClick={()=> setActive(true)} className='btn btn-primary'>Add</div>
          <activeContext.Provider value={[active,setActive]}>
            {active && <Items tab={tab}/>}
          </activeContext.Provider>
        </div>
      </taskContext.Provider>
      </div>
  )
}

export default ItemList

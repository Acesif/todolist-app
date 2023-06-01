import React, { createContext, useContext, useEffect, useState } from 'react'
import Items from './Items'
import { activeContext } from '../App';

export const taskContext = createContext();

function ItemList({tab}) {
  const [active,setActive] = useContext(activeContext)
  const [task,setTask] = useState([])

  useEffect(()=>{
    if(task.length !== 0){
      localStorage.setItem(tab,JSON.stringify(task))
    }
  },[task])

  return (
    <div>
      <taskContext.Provider value={[task,setTask]}>
        <div className='add-to-list'>
          <div onClick={()=> setActive(true)} className='btn btn-primary'>Add</div>
            {active && <Items tab={tab}/>}
          <div>
            {
              task?.map(e=>(
                <p key={e.name}>{e.name}</p>
              ))
            }
          </div>
        </div>
      </taskContext.Provider>
      </div>
  )
}

export default ItemList

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
  useEffect(()=>{
    if(localStorage.getItem(tab)){
      setTask(JSON.parse(localStorage.getItem(tab)))
    }
    else{
      setTask([])
    }
  },[tab])

  return (
    <div>
      <taskContext.Provider value={[task,setTask]}>
        <div className='add-to-list'>
          <div onClick={()=> setActive(true)} className='btn btn-primary'>Add</div>
            {active && <Items tab={tab}/>}
          <div className='grid-parent'>
            {
              task?.map(e=>(
                <div className={e.name}>
                  <p><strong>Task:</strong> {e.name}</p>
                  <p><strong>Deadline:</strong> {e.deadline}</p>
                  <p><strong>Description:</strong> {e.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </taskContext.Provider>
      </div>
  )
}

export default ItemList

import React, { createContext, useContext, useEffect, useState } from 'react'
import Items from './Items'
import { activeContext } from '../App';
import { AiFillDelete } from 'react-icons/ai';

export const taskContext = createContext();

function ItemList({tab}) {
  const [active,setActive] = useContext(activeContext)
  const [task,setTask] = useState([])

  useEffect(()=>{
    if(task.length !== 0){
      localStorage.setItem(tab,JSON.stringify(task))
    }
    else{
      localStorage.setItem(tab,JSON.stringify([]))
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

  const handleDelete = (item) => {
    const projectList = task.filter(e => {
      return e.name !== item;
    })
    setTask(projectList)
}
  const handleCheck = (item) => {
    const checkeditems = task.map(e=>{
      if(e.name === item){
        e.done = !e.done
      }
      return e
    })
    setTask(checkeditems)
  }

  return (
    <div>
      <taskContext.Provider value={[task,setTask]}>
        <div className='add-to-list'>
          <div onClick={()=> setActive(true)} className='btn btn-primary'>Add</div>
            {active && <Items tab={tab}/>}
          <div className='grid-parent'>
            {
              task?.map(e=>(
                <div key={e.name}>
                  <div className='details'>
                    <p><strong>Task</strong><br /> {e.name}</p>
                    <p><strong>Deadline</strong><br /> {e.deadline}</p>
                    <p><strong>Description</strong><br /> {e.description}</p>
                  </div>
                  <div key={e.name} className='actions'>
                    <div onClick={()=>handleDelete(e.name)} id='delete'>
                      <AiFillDelete/>
                    </div>
                    <div onClick={()=>handleCheck(e.name)} id="checkbox">
                      <div className={`check-container ${e.done?"checked":""}`}>
                        <p className='check-text'>Done</p>
                        <input type="checkbox" checked={e.done} id="done" />
                      </div>
                    </div>
                  </div>
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

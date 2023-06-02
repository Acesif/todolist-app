import React, { createContext, useContext, useEffect, useState } from 'react'
import Items from './Items'
import { activeContext } from '../App';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

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

  const handleDelete = (item) => {
    console.log(item.target);
  }
  const handleEdit = (item) => {
    console.log(item.target);
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
                    <p><strong>Task:</strong> {e.name}</p>
                    <p><strong>Deadline:</strong> {e.deadline}</p>
                    <p><strong>Description:</strong> {e.description}</p>
                  </div>
                  <div key={e.name} className='actions'>
                    <div onClick={(e)=>handleDelete(e)} id='delete'>
                      <AiFillDelete/>
                    </div>
                    <div onClick={(e)=>handleEdit(e)} id="edit">
                      <AiFillEdit/>
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

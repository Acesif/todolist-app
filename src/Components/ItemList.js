import React, { createContext, useState } from 'react'
import Items from './Items'

export const activeContext = createContext();

function ItemList({tab}) {
  const [item,setItem] = useState([])
  const [active,setActive] = useState(false)
  return (
    <div>
      <div className='add-to-list'>
        <div onClick={()=> setActive(true)} className='btn btn-primary'>Add</div>
        <activeContext.Provider value={[active,setActive]}>
          {active && <Items tab={tab}/>}
        </activeContext.Provider>
      </div>
      {/* <h1>{tab}</h1> */}
    </div>
  )
}

export default ItemList

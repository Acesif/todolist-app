import React, { useState } from 'react'

function ItemList({tab}) {
  const [item,setItem] = useState([])
  const handleAdd = () => {
    let val = document.getElementById("item-name")
    if((val.value).trim() !== ""){
        
        val.value = ""
    }
    else{
        alert("Item cannot be empty")
    }
}
  return (
    <div>
      <div className='add-to-list'>
        <form className="row g-3">
          <div className="col-auto">
            <label className="visually-hidden">
              <input type="text" id='item-name' className="form-control" placeholder="Enter an activity" />
            </label>
          </div>
          <div className="col-auto">
            <div onClick={()=> handleAdd()} className="btn btn-primary mb-3">Add Item</div>
          </div>
        </form>
      </div>
      <h1>{tab}</h1>
    </div>
  )
}

export default ItemList

import React, { useContext } from 'react'
import { activeContext } from './ItemList'

function Items({tab}) {
  const [active,setActive] = useContext(activeContext)
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
    <div id='item-form'>
      <div className="rendered-form">
        <div>
          <h1>Add Entry</h1>
        </div>
        <div className="formbuilder-text form-group field-text-1685466081947">
          <label htmlFor="text-1685466081947" className="formbuilder-text-label">Text Field</label>
          <input type="text" className="form-control" />
        </div>
        <div className="formbuilder-date form-group field-date-1685466066885">
          <label htmlFor="date-1685466066885" className="formbuilder-date-label">Date Field</label>
          <input type="date" className="form-control" id="date-1685466066885" />
        </div>
        <div className="formbuilder-textarea form-group field-textarea-1685465303786">
          <label htmlFor="textarea-1685465303786" className="formbuilder-textarea-label">Text Area</label>
          <textarea type="textarea" className="form-control" defaultValue={""} />
        </div>
        <div className="formbuilder-button form-group field-button-1685465312232">
          <div onClick={()=>handleAdd()} className="btn btn-primary">Button</div>
        </div>
      </div>

    </div>
  )
}

export default Items

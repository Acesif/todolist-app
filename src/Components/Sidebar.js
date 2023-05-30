import React, { useEffect, useState } from 'react'

function Sidebar() {
    const [input,setInput] = useState([])
    const [saveState,setsaveState] = useState(false)
    const handleAdd = () => {
        let val = document.getElementById("project-title")
        if((val.value).trim() !== ""){
            setInput([...input,{
                id:input.length,
                value: val.value
            }])
            setsaveState(true)
            val.value = ""
        }
        else{
            alert("Project name cannot be empty")
        }
    }
    useEffect(()=>{
        if (saveState){
            const project_lstore = JSON.stringify(input);
            localStorage.setItem('Sections', project_lstore);
            setsaveState(false)
        }
    },[setsaveState,saveState,input])
    useEffect(()=>{
    const project_lget = JSON.parse(localStorage.getItem('Sections'));
    if (project_lget !== null) {
        setInput(project_lget);
    }
    else{
        setInput([{
            id:0,
            value: "Untitled Project"
        }])
    }
    //eslint-disable-next-line
    },[])

  return (
    <div className="sidebar">
        <form className="form-inline mt-4">
            <div className="form-group mx-sm-3 mb-2">
                <input type="text" id='project-title' className="form-control" placeholder="Enter Project Name" required/>
            </div>
            <div onClick={()=> handleAdd()} className="btn btn-primary mb-2">Add</div>
        </form>
        {input.map(e=>(
           <div className='project-list'>
            <h5 key={e.id}>{e.value}</h5>
           </div>
        ))}
    </div>
  )
}

export default Sidebar

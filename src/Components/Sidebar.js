import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

function Sidebar() {
    const [input,setInput] = useState([])
    const [saveState,setsaveState] = useState(false)
    const [tab,setTab] = useContext(Context)
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
            value: "Temporary Project"
        }])
        const project_lstore = JSON.stringify(
            [{
                id:0,
                value: "Temporary Project"
            }]
        );
        localStorage.setItem('Sections', project_lstore);
    }
    //eslint-disable-next-line
    },[])

    const handleDelete = (item) => {
        if(item !== 0){
            const projectList = input.filter(e => {
                return e.id !== item;
            })
            setInput(projectList)
            localStorage.removeItem(item)
            setsaveState(true)
        }
    }
    const handleEdit = (item) => {
        const editedValue = prompt("Enter updated section name");
        if(editedValue !== ""){
            const updatedArr = input.map(e=>{
                if(e.id === item){
                    input[item].value = editedValue
                }
                return e
            })
            setInput(updatedArr)
            setsaveState(true)
        }
    }

  return (
    <div className="sidebar">
        <form className="form-inline mt-4">
            <div className="form-group mx-sm-3">
                <input type="text" id='project-title' className="form-control" placeholder="Enter Project Name" required/>
            </div>
            <div onClick={()=> handleAdd()} className="btn-sidebar">Add</div>
        </form>
        {input?.map(e=>(
           <div key={e.id} onClick={() => setTab(e.id)} className='project-list'>
            <h5>{e.value}</h5>
            <div className='actions-sidebar'>
                    <div onClick={()=>handleDelete(e.id)} id='delete'>
                      <AiFillDelete/>
                    </div>
                    <div onClick={()=>handleEdit(e.id)} id="edit">
                      <AiFillEdit/>
                    </div>
                  </div>
           </div>
        ))}
    </div>
  )
}

export default Sidebar

import React, { useContext, useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';
import { context } from '../App';

const Sidebar = () => {
    // Initializing first value in the sidebar
    const [projectList,setProjectList] = useState();
    window.addEventListener("load",()=>{
        if(localStorage.getItem("Sections")){
            const strToObj = JSON.parse(localStorage.getItem("Sections"))
            setProjectList(strToObj)
        }
        else if(projectList === undefined){
            setProjectList([
                {
                    id:0,
                    value: "Untitled"
                }
            ])
        }
    })
    useEffect(()=>{
        if(projectList !== undefined){
            localStorage.setItem("Sections",JSON.stringify(projectList))
        }
    },[projectList])
    //
    // Which tab is currently clicked on
    const [tab, setTab] = useContext(context);
    const addProject = () => {
        const title = prompt("Enter Project Name")
        if(title){
            setProjectList([...projectList,{
                id:projectList.length,
                value: title
            }])
        }
    } 
    const handleClick = (e) =>{
        const list = document.querySelectorAll('.li');
        list.forEach(element => {
            if(element.classList.contains("check")){
                element.classList.remove("check")
            }
        });
        if(e.target.classList.contains("li")){
            e.target.classList.add("check")
            setTab(e.target.id);
        }
    }
    const handleDelete = (id) =>{
        setProjectList(projectList.filter(
            project => project.id !== id
        ))
    }
    const handleEdit = (id) => {
        projectList[id].value = prompt("Update title")
        setProjectList([...projectList])
    }
    return (
        <div className='sidebar'>
        <h3>Projects</h3>
        <ul className="grey list-group list-group-flush">
            <div className='projectList'>
                {
                    projectList?.map((item) =>(
                        <div key={item.id} id={item.id} onClick={handleClick} className='li list-group-item'>
                            <li>
                                {item.value}
                            </li>
                            <div className='project-crud'>
                                <p onClick={() =>handleEdit(item.id)}><BsPencilFill/></p>
                                <p onClick={() =>handleDelete(item.id)}><AiFillDelete/></p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <li onClick={addProject} id='add' className="list-group-item">+</li>
        </ul>
        </div>
  )
}

export default Sidebar
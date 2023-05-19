import React, { useContext, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';
import { context } from '../App';

const Sidebar = () => {
    const [projectList,setProjectList] = useState([
        {id:0,
        value: 'Untitled Project'}
    ]);
    if(localStorage.getItem("Sections") == null){
        const str = JSON.stringify(projectList)
        localStorage.setItem("Sections",str)
    }
    const [tab, setTab] = useContext(context);
    const addProject = () => {
        const title = prompt("Enter Project Name")
        if(title){
            setProjectList([...projectList,{
                id:projectList.length,
                value: title
            }])
            console.log(projectList);
            localStorage.setItem("Sections",JSON.stringify(projectList))
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
        <div className='projects'>
        <h3>Projects</h3>
        <ul className="grey list-group list-group-flush">
            <div className='projectList'>
                {
                    projectList.map((item) =>(
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
    </div>
  )
}

export default Sidebar
"use client"
import style from "@/scss/components/sections/projects.module.scss"
import { useState } from "react"
import CreateProjectForm from "../forms/createProjectFom/createProjectForm"
const Projects = () => {
  
  const [add, setAdd]=useState(false)

  const handleChangeAdd=()=>{
    setAdd(!add)
  }

  return (
    <div className={style.cont}>
        <div className={style.header}>
            <h1 className={style.titleAnimated}>Proyectos</h1>
            <button className={style.addButton} onClick={handleChangeAdd}>+ Añadir</button>
        </div>
        <div className={style.projectsCont}>
            
        </div>
        {
            add && <CreateProjectForm close={setAdd}/>
        }
    </div>
  )
}

export default Projects

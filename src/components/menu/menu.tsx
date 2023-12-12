"use client"
import React from 'react'
import menu from '@/scss/components/menu.module.scss'
import { useDispatch } from 'react-redux'
import { changeSection } from '@/lib/redux/features/sectionSlice'

const Menu = () => {
  
  const dispatch=useDispatch()

  const handleChanheSection=(section:string)=>{

    dispatch(changeSection(section))

  }

  return (
    <aside className={menu.menuLayout}>
      <ul>
        <li onClick={()=>handleChanheSection("about")}><span>01. </span>Sobre mi</li>
        <li onClick={()=>handleChanheSection("skills")}><span>02. </span>Conocimientos</li>
        <li onClick={()=>handleChanheSection("experience")}><span>03. </span>Experiencia</li>
        <li onClick={()=>handleChanheSection("projects")}><span>04. </span>Proyectos</li>
        <li onClick={()=>handleChanheSection("contact")}><span>05. </span>Contacto</li>
      </ul>
    </aside>
  )
}

export default Menu

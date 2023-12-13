"use client"
import React, { useEffect } from 'react'
import menu from '@/scss/components/menu.module.scss'
import { useDispatch } from 'react-redux'
import { changeSection } from '@/lib/redux/features/sectionSlice'
import { usePathname } from 'next/navigation'

const Menu = () => {
  

  const pathname=usePathname()

  const dispatch=useDispatch()

  const handleChanheSection=(section:string)=>{

    dispatch(changeSection(section))

  }

  const userSections=[
    { id: "about", title: "Sobre mi" },
    { id: "skills", title: "Conocimientos" },
    { id: "experience", title: "Experiencia" },
    { id: "projects", title: "Proyectos" },
    { id: "contact", title: "Contacto" },
  ]

  const adminSections=[
    { id:"adminProjects", title:"Projectos" },
    { id: "adminExperience", title: "Experiencia" },
    { id: "skills", title: "Conocimientos" },
    { id: "messages", title:"Mensajes"},
    {id:"blog", title:"Blog posts"}
  ]

  const isAdmin=pathname.includes("admin")

  console.log(isAdmin)
  return (
    <aside className={menu.menuLayout}>
      <ul>
        {
          !isAdmin ? 
            userSections.map((section, index)=>{
              return(
                <li key={index} onClick={()=>handleChanheSection(section.id)}><span>0{index+1}. </span>{section.title}</li>
              )
            })
          :
          adminSections.map((section, index)=>{
            return(
              <li key={index} onClick={()=>handleChanheSection(section.id)}><span>0{index+1}. </span>{section.title}</li>
            )
          })
        }
      </ul>
    </aside>
  )
}

export default Menu

"use client"
import { useEffect } from 'react'
import menu from '@/scss/components/menu.module.scss'
import { useDispatch } from '@/lib/redux/reduxHooks'
import { changeSection } from '@/lib/redux/features/sectionSlice'
import { usePathname } from 'next/navigation'
import { useGetExperienceQuery } from '@/lib/redux/service/experience.Api'
import { useGetSkillsQuery } from '@/lib/redux/service/skilsAPI'
import { useGetProjectsQuery } from '@/lib/redux/service/projectsAPI'
import { setExperience } from '@/lib/redux/features/experience'
import { setSkills } from '@/lib/redux/features/skillsSlice'
import { setProjects } from '@/lib/redux/features/projectsSlice'
import { sectionTypes } from '@/utils/types'

const Menu = () => {

  const pathname=usePathname()

  const dispatch=useDispatch()


  const {data:experience}=useGetExperienceQuery(null)

  const {data:skills}=useGetSkillsQuery(null)

  const {data:projects}=useGetProjectsQuery(null)

  const handleChangeSection=(section:string)=>{

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

    { id: "about", title: "Sobre mi" },
    { id: "projects", title: "Proyectos" },
    { id: "experience", title: "Experiencia" },
    { id: "skills", title: "Conocimientos" },
    { id: "messages", title:"Mensajes" },
    { id: "blog post", title:"Blog posts" }

  ]

  const renderSections=(sections:Array<any>)=>{

    return sections.map((section:sectionTypes, index)=>{

      return (
        <li key={index} onClick={()=>handleChangeSection(section.id)}><span>0{index+1}. </span>{section.title}</li>
      )

    })
  }

  const isAdmin=pathname.includes("admin")

  useEffect(()=>{

  if(experience){
    dispatch(setExperience(experience))
  }
  if(skills){
    dispatch(setSkills(skills))
  }
  if(projects){
    dispatch(setProjects(projects))
  }

  },[experience, skills, projects])

  return (
    <aside className={menu.menuLayout}>
      <ul>
        {!isAdmin ? renderSections(userSections) : renderSections(adminSections)}
      </ul>
    </aside>
  )
}

export default Menu

"use client"
import style from "@/scss/components/sections/sections.module.scss"
import { useSelector } from "@/lib/redux/reduxHooks"
import About from "./about"
import Skills from "./skills"
import Contact from "@/components/forms/contactForm/contactForm"

const Sections = () => {
  
  const section=useSelector((state)=>state.section.name)

  console.log(section)
  return (
    <div className={style.sectionCont}>
        {section==="about" && <About/>}
        {section==="skills" && <Skills/>}
        {section==="contact" && <Contact/>}
    </div>
  )
}

export default Sections

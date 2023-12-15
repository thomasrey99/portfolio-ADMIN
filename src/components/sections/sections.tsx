"use client"
import style from "@/scss/components/sections/sections.module.scss"
import { useSelector } from "@/lib/redux/reduxHooks"
import About from "./about"
import Skills from "./skills"
import Contact from "@/components/forms/contactForm/contactForm"
import Projects from "./projects"
import Experience from "./experience"
import Messages from "./messages"

const Sections = () => {
  
  const section=useSelector((state)=>state.section.name)

  console.log(section)
  return (
    <section className={style.sectionCont}>
        {section==="about" && <About/>}
        {section==="skills" && <Skills/>}
        {section==="contact" && <Contact/>}
        {section==="projects" && <Projects/>}
        {section==="experience" && <Experience/>}
        {section==="messages" && <Messages/>}
    </section>
  )
}

export default Sections

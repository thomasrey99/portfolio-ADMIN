import React from 'react'
import style  from "@/scss/components/sections/skills.module.scss"
import TextSphere from '../textSphere/textSphere'

const Skills = () => {
  return (
    <div className={style.skillsCont}>
        <h1 className={style.titleSkills}>Conocimientos</h1>
      <TextSphere/>
    </div>
  )
}

export default Skills

import style  from "@/scss/components/sections/skills.module.scss"
import { skills } from "@/utils/types"
import Image from "next/image"

const TechCard = ( skill:skills) => {
  return (
            <div className={style.techSkill}>

                <Image src={skill.image} alt="tech image" width={50} height={50} priority={true}/>

                <h3>{skill.name}</h3>

                <p>{skill.level}%</p>

                <p>xp: {skill.yearExperience} {skill.yearExperience>1?"años":"año"}</p>
                            
            </div>
  )
}

export default TechCard

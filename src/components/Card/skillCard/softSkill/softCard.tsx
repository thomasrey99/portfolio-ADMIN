import { softSkills } from "@/utils/types"
import style  from "@/scss/components/sections/skills.module.scss"

const SoftCard = ({name, type}:softSkills) => {
  return (
    <div className={style.softCard}>
      <h3>{name}</h3>
    </div>
  )
}

export default SoftCard

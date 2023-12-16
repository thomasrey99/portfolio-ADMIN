
import style  from "@/scss/components/sections/skills.module.scss"
import TextSphere from '../textSphere/textSphere'
import { useState } from "react"
import CreateSkillForm from "../forms/createSkillForm/createSkillForm"
import { useSelector } from "@/lib/redux/reduxHooks"
import TechCard from "../Card/skillCard/techSkill/techCard"
import { certifications, skills, softSkills } from '../../utils/types';
import SoftCard from "../Card/skillCard/softSkill/softCard"
import CreateMenu from "./createMenu"
import CreateSoftSkillForm from "../forms/createSkillForm/createSoftSkillForm"
import CreateCertification from "../forms/createSkillForm/createCertification"
import CertificateCard from "../Card/certificateCard/certificateCard"

const Skills = () => {

  const techSkills=useSelector(state=>state.skills.techSkills)

  const softSkills=useSelector(state=>state.skills.softSkills)

  const certificates=useSelector(state=>state.certificates.allCertifications)

  const [add, setAdd]=useState(false)

  const [form, setForm]=useState("")

  const [typeSkill, setTypeSkill]=useState<string>("tech skills")

  const handleChangeType=(event: React.ChangeEvent<HTMLSelectElement>)=>{

    const {value}=event.target

    setTypeSkill(value)
  }

  const handleChangeAdd=()=>{
    setAdd(!add)
  }

  const closeForm=()=>{
    setForm("")
  }
  const handleChangeForm=(form:string)=>{
    setForm(form)
    setAdd(!add)
  }

  console.log(techSkills)

  return (
    <div className={style.cont}>

        <div className={style.header}>
          <h1 className={style.titleAnimated}>{
          typeSkill==="tech skills"?"Tech skills":typeSkill==="soft skills"?"Soft skills":typeSkill==="certifications"?"Certificaciones":""
          }</h1>
          <select className={style.select} onChange={handleChangeType} value={typeSkill}>
            <option value="tech skills">Tech skills</option>
            <option value="soft skills">Soft skills</option>
            <option value="certifications">Certificaciones</option>
          </select>
          <button className={style.addButton} onClick={handleChangeAdd}>+ Añadir</button>
        </div>
{/**/}
        <div className={style.skillCont}>
          <div className={style.skills}>
            {
              typeSkill==="tech skills" &&
                techSkills?.map((skill:skills, index)=>{
                  return (
                    <TechCard key={index} name={skill.name} image={skill.image} level={skill.level} yearExperience={skill.yearExperience} type={skill.type}/>
                  )
                })
            }
            {
              typeSkill==="soft skills" &&
              softSkills?.map((softSkill:softSkills, index)=>{
                return (
                  <SoftCard key={index} name={softSkill.name} type={softSkill.type}/>
                )
              })
            }
            {
              typeSkill==="certifications" && certificates?.map((certificate:certifications, index)=>{
                return(
                  <CertificateCard key={index} title={certificate.title} image={certificate.image} urlCertificate={certificate.urlCertificate} institution={certificate.institution} achievement={certificate.achievement}/>
                )
              })
            }
          </div>
        </div>
        {
          add&& <CreateMenu close={handleChangeAdd} changeForm={handleChangeForm}/>
        }
        {
          form==="create tech skill" && <CreateSkillForm  close={closeForm}/>
        }
        {
          form==="create soft skill" && <CreateSoftSkillForm  close={closeForm}/>
        }
        {
          form==="create certification" && <CreateCertification  close={closeForm}/>
        }
    </div>
  )
}

export default Skills

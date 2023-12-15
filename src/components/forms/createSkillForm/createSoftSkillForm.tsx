"use client"
import style from "@/scss/components/forms/createSoftSkillForm.module.scss"
import { useState } from "react"
import { usePostSkillMutation } from "@/lib/redux/service/skilsAPI"
import { createNotification } from "@/utils/notifications/createNotification"

const CreateSoftSkillForm = ({close}:any) => {

    const [mutate]=usePostSkillMutation()

    const[skill, setSkill]=useState({
        name:"",
        type:"soft skill"
    })

  const handleInputChange=(event: React.ChangeEvent<HTMLInputElement>)=>{

    const {name, value}=event.target

    setSkill({
        ...skill,
        [name]:value
    })

  }

  const handeSubmit=async(event:any)=>{

    event.preventDefault()

    try {

        await mutate({
            ...skill
        })

        createNotification("Soft skill")
        
    } catch (error:any) {

        throw new Error(error)

    }

  }
  return (
    <div className={style.formCont}>
      <form className={style.formCreateSkill}>
        <h2>Añadir soft skill</h2>
        <div className={style.inputGroup}>
            <label htmlFor="name" className={style.label}>Nombre</label>
            <input type="text" name="name" className={style.input} onChange={handleInputChange} value={skill.name}/>
        </div>
        <div className={style.buttonCont}>
            <button className={style.cancelButton} onClick={close}>Cancelar</button>
            <button className={style.addButton} onClick={handeSubmit}>Añadir</button>
        </div>
      </form>
    </div>
  )
}

export default CreateSoftSkillForm

import { useState } from 'react';
import style from '@/scss/components/forms/createTechSkillForm.module.scss';
import { createNotification } from '@/utils/notifications/createNotification';
import { uploadFile } from '@/firebase/imageStorage';
import { usePostSkillMutation } from '@/lib/redux/service/skilsAPI';
import { skillInfo } from '@/utils/types';


const CreateSkillForm = ({close}:any) => {

  const [mutate, isLoading]=usePostSkillMutation()

  const [skill, setSkill]=useState<skillInfo>({
    name:"",
    type:"tech skill",
    image:"",
    level:"50",
    yearExperience:1
  })

  const handleInputChange=(event: React.ChangeEvent<HTMLInputElement>)=>{

    const {value, name}=event.target

    setSkill({
        ...skill,
        [name]:value
    })

  }

  const handleFileChange=(event: React.ChangeEvent<HTMLInputElement>)=>{

    if (event.target.files && event.target.files.length > 0) {

        setSkill({
            ...skill,
            image:event.target.files[0]
        });

      }
  }

  const handleSelectChange=(event: React.ChangeEvent<HTMLSelectElement>)=>{

    const {value, name}=event.target

    setSkill({
        ...skill,
        [name]:value
    })

  }

  const handleSubmit=async(event:any)=>{

    event.preventDefault()

    try {

        const urlImage=await uploadFile(skill.image)

        if(urlImage){
            await mutate({
                ...skill,
                image:urlImage
            })
            console.log("skill creada con exito")
            close()
            createNotification("Skill")
        }

        
    } catch (error:any) {

        throw new Error(error)

    }
  }
  console.log("enviando info", isLoading)
  return (
    <div className={style.formCont}>
      <form className={style.formCreateSkill}>
        <h2>Añadir tech skill</h2>
        <div className={style.inputGroup}>
            <label htmlFor='name' className={style.label}>Tecnologia</label>
            <input type='text' placeholder='ingrese el nombre' name='name' className={style.input} onChange={handleInputChange} value={skill.name}/>
        </div>        
        <div className={style.inputGroup}>
            <label htmlFor='level' className={style.label}>Nivel</label>
            <input type='range' name='level' className={style.input} onChange={handleInputChange} value={skill.level}/>
            <span>{skill.level}%</span>
        </div>
        <div className={style.inputGroup}>
            <label htmlFor='yearExperience' className={style.label}>Años de experiencia</label>
            <input type='number' name='yearExperience' className={style.inputNumber} onChange={handleInputChange} value={skill.yearExperience}/>
        </div>
        <div className={style.inputGroup}>
            <label htmlFor='image' className={style.label}>Imagen</label>
            <input type='file' name='image' className={style.input} onChange={handleFileChange}/>
        </div>
        <div className={style.buttonCont}>
            <button className={style.cancelButton} onClick={close}>Cancelar</button>
            <button className={style.addButton} onClick={handleSubmit}>Añadir</button>
        </div>
      </form>
    </div>
  )
}

export default CreateSkillForm

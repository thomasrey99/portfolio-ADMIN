"use client"
import { usePostProjectMutation } from "@/lib/redux/service/projectsAPI"
import { useSelector } from "@/lib/redux/reduxHooks"
import { useState } from "react"
import { project, skills } from "@/utils/types"
import style from "@/scss/components/forms/createProjectForm.module.scss"
import { uploadFile } from "@/firebase/imageStorage"
import { createNotification } from "@/utils/notifications/createNotification"
const CreateProjectForm = ({close}:any) => {

  const [mutate]=usePostProjectMutation()

  const TechSkills=useSelector(state=>state.skills.techSkills)

  const [project, setProject]=useState<project>({
    name:"",
    description:"",
    rol:"",
    technologies:[],
    repositoryURL:"",
    deployURL:"",
    imageURL:""
  })

  const handleInputChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value}=event.target
    setProject({
      ...project,
      [name]:value
    })
  }
  const handleDescriptionChange=(event: React.ChangeEvent<HTMLTextAreaElement>)=>{
    const {name, value}=event.target
    setProject({
      ...project,
      [name]:value
    }) 
  }
  const handleFileChange=(event: React.ChangeEvent<HTMLInputElement>)=>{

    if (event.target.files && event.target.files.length > 0) {

        setProject({
            ...project,
            imageURL:event.target.files[0]
        });

      }
  }
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    let updatedTechnologies = [...project.technologies]; // Hacer una copia del array para modificarla
  
    if (updatedTechnologies.includes(option)) {
      updatedTechnologies = updatedTechnologies.filter((tech) => tech !== option);
    } else {
      updatedTechnologies.push(option);
    }
  
    setProject({
      ...project,
      technologies: updatedTechnologies,
    });
  };
  const handleClose=(event:any)=>{
    event.preventDefault()
    close()
  }
  const handleSubmit=async (event:any)=>{

    event.preventDefault()

    try {
      
      const urlImage=await uploadFile(project.imageURL)

      await mutate({
        ...project,
        imageURL:urlImage
      })
      createNotification("Proyecto")
      setProject({
        name:"",
        description:"",
        rol:"",
        technologies:[],
        repositoryURL:"",
        deployURL:"",
        imageURL:""
      })
    } catch (error) {

      throw new Error("Error al subir el proyecto")

    }
  }
  return (
    <div className={style.formCont}>
      <form className={style.formCreateProject}>  
        <div className={style.inputGroup}>
            <label htmlFor='name' className={style.label}>Nombre</label>
            <input type='text' placeholder='ingrese el nombre' name='name' className={style.input} onChange={handleInputChange} value={project.name}/>
        </div>        
        <div className={style.inputGroup}>
            <label htmlFor='rol' className={style.label}>Rol</label>
            <input type='text' placeholder='ingrese el nombre' name='rol' className={style.input}onChange={handleInputChange} value={project.rol}/>
        </div>
        <div className={style.inputGroup}>
            <label htmlFor='technologies' className={style.label}>Tecnologias</label>
            <select className={style.select} multiple name="technologies" onChange={handleSelectChange} value={project.technologies}>
              <option defaultValue="" disabled>Seleccione una opcion</option>
              {
                TechSkills?.map((skill:skills, index)=>{
                  return (
                    <option key={index} value={skill.name} className={style.option}>{skill.name}</option>
                  )
                })
              }
            </select>
        </div>
        <div className={style.inputGroup}>
            <label htmlFor='repositoryURL' className={style.label}>Repositorio</label>
            <input type='text' placeholder="url del repositorio..." name='repositoryURL' className={style.input}onChange={handleInputChange} value={project.repositoryURL}/>
        </div>
        <div className={style.inputGroup}>
            <label htmlFor='deployURL' className={style.label}>Deploy</label>
            <input type='text' placeholder='url del deploy...' name='deployURL' className={style.input} onChange={handleInputChange} value={project.deployURL}/>
        </div>
        <div className={style.inputGroup}>
            <label htmlFor='imageURL' className={style.label}>Imagen</label>
            <input type='file' name='imageURL' className={style.input} onChange={handleFileChange}/>
        </div>
        <div className={style.inputGroup}>
            <label htmlFor='description' className={style.label}>Descripcion</label>
            <textarea name="description" className={style.inputText} onChange={handleDescriptionChange} value={project.description}/>
        </div>
        <div className={style.buttonCont}>
            <button className={style.cancelButton} onClick={handleClose}>Cancelar</button>
            <button className={style.addButton} onClick={handleSubmit}>Añadir</button>
        </div>
      </form>
    </div>
  )
}

export default CreateProjectForm

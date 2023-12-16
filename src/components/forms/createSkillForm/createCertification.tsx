"use client"
import style from "@/scss/components/forms/createCertificationForm.module.scss"
import { certificateInfo } from "@/utils/types"
import { useState } from "react"
import { usePostCertificationsMutation } from "@/lib/redux/service/certificationsApi"
import { uploadFile } from "@/firebase/imageStorage"
import { createNotification } from "@/utils/notifications/createNotification"

const CreateCertification = ({close}:any) => {

  const [mutate, isLoading]=usePostCertificationsMutation()

  const [certificateInfo, setCertificateInfo]=useState<certificateInfo>({
    title:"",
    institution:"",
    image:"",
    urlCertificate:"",
    achievement:""
  })

  const handleInputChange=(event: React.ChangeEvent<HTMLInputElement>)=>{

    const {name, value}=event.target

    setCertificateInfo({
        ...certificateInfo,
        [name]:value
    })

  }
  const handleFileChange=(event: React.ChangeEvent<HTMLInputElement>)=>{

    if (event.target.files && event.target.files.length > 0) {

        setCertificateInfo({
            ...certificateInfo,
            image:event.target.files[0]
        });

      }
  }

  const handleSubmit=async (event:any)=>{

    event.preventDefault()

    try {
        
        const urlImage=await uploadFile(certificateInfo.image)

        if(urlImage){
            mutate({
                ...certificateInfo,
                image:urlImage
            })
            createNotification("Certificado")
            close()
        }

    } catch (error) {

        throw new Error("error when create certification")

    }


  }

  return (
    <div className={style.formCont}>
      <form className={style.formCreateSkill}>
        <h2>Añadir certificado</h2>
        <div className={style.inputGroup}>
            <label htmlFor='title' className={style.label}>Titulo</label>
            <input type='text' placeholder='ingrese el titulo' name='title' className={style.input} onChange={handleInputChange} value={certificateInfo.title}/>
        </div>
        <div className={style.inputGroup}>
            <label htmlFor='institution' className={style.label}>Institucion</label>
            <input type='text' placeholder='ingrese la institucion' name='institution' className={style.input} onChange={handleInputChange} value={certificateInfo.institution}/>
        </div>
        <div className={style.inputGroup}>
            <label htmlFor='achievement' className={style.label}>Destacado</label>
            <input type='text' placeholder='ingrese algo a destacar' name='achievement' className={style.input} onChange={handleInputChange} value={certificateInfo.achievement}/>
        </div>
        <div className={style.inputGroup}>
            <label htmlFor='image' className={style.label}>Imagen</label>
            <input type='file' name='image' className={style.input} onChange={handleFileChange}/>
        </div>
        <div className={style.inputGroup}>
            <label htmlFor='urlCertificate' className={style.label}>Url del certificado</label>
            <input type='text' placeholder='ingrese la url del certificado' name='urlCertificate' className={style.input} onChange={handleInputChange} value={certificateInfo.urlCertificate}/>
        </div>
        <div className={style.buttonCont}>
            <button className={style.cancelButton} onClick={close}>Cancelar</button>
            <button className={style.addButton} onClick={handleSubmit}>Añadir</button>
        </div>
      </form>
    </div>
  )
}

export default CreateCertification

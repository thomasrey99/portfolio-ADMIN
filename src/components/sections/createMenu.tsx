import style from "@/scss/components/sections/createMenuSkills.module.scss"

const CreateMenu = ({close, changeForm}:any) => {
  return (
    <div className={style.menuCont}>
      <div className={style.itemsCont}>
        <h2>¿Que desea añadir?</h2>
        <div className={style.buttonCont}>
            <button className={style.button} onClick={()=>changeForm("create tech skill")}>Tech skill</button>
            <button className={style.button} onClick={()=>changeForm("create soft skill")}>Soft skill</button>
            <button className={style.button} onClick={()=>changeForm("create certification")}>Certificado</button>
            <button className={style.buttonCancel} onClick={close}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default CreateMenu

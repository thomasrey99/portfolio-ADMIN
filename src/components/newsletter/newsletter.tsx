import style from "@/scss/components/newsletter.module.scss"

const Newsletter = () => {
  return ( 
    <div className={style.newsCont}>
      <input type="email"/>
      <button>Suscribite</button>
    </div>
  )
}

export default Newsletter

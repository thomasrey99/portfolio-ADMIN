import style from "@/scss/components/sections/contact.module.scss"
import axios from "axios"

const ContactForm = () => {

  return (
    <div className={style.formContainer}>
      <form className={style.form}>
        <div className={style.formGroup}>
          <label htmlFor="email">Company Email</label>
          <input type="text" id="email" name="email" required/>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea name="textarea" id={style.textarea} required/>
        </div>
        <button className={style.formSubmitBtn} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm

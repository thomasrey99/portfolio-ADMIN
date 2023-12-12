import footer from '@/scss/components/footer.module.scss'
import Image from 'next/image'
import logoGitHub from "@/assets/github.svg"
import logoLinkedin from "@/assets/linkedin.svg"
import logoInstagram from "@/assets/instagram.svg"
import logoMail from "@/assets/mail.svg"
import Newsletter from '../newsletter/newsletter'
import style from '@/scss/components/newsletter.module.scss';

const Footer = () => {
  return (
    <div className={footer.footerLayout}>
      <Image src={logoGitHub} alt='github' className={footer.imgLogo}/>
      <Image src={logoLinkedin} alt='linkedin' className={footer.imgLogo}/>
      <Image src={logoMail} alt='mail' className={footer.imgLogo}/>
      <Image src={logoInstagram} alt='instagram' className={footer.imgLogo}/>
      <h5 className={footer.copyrigth}>© 2023 Thomas Rey. Todos los derechos reservados.</h5>
    </div>
  )
}

export default Footer

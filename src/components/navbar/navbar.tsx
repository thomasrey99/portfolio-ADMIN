import navbar from '@/scss/components/navbar.module.scss'
import Link from 'next/link'

const Navbar = () => {


  return (
    <header className={navbar.headerLayout}>
      <nav className={navbar.navLinks}>
        <Link href={"/blog"} className={navbar.link}>Blog</Link>
        <Link href={"/admin"} className={navbar.link}>Admin</Link>
      </nav>
    </header>
  )
}

export default Navbar

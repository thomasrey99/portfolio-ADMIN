import { certifications } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style  from "@/scss/components/sections/skills.module.scss"
import medalIcon from "@/assets/medalla.png"

const CertificateCard = ({title, image, urlCertificate, institution, achievement}:certifications) => {
  return (
    <div className={style.certificateCard}>
      <Image src={image} alt='certificate' width={230} height={180}/>
      <div className={style.cardInfo}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.institution}>{institution}</p>
        <Link href={`${urlCertificate}`} target='blank' className={style.link}>Ver certificado</Link>
      </div>
      {
        achievement!=="" && <Image src={medalIcon} width={50} height={50} alt='medal icon' className={style.medal}/>
      }
    </div>
  )
}

export default CertificateCard

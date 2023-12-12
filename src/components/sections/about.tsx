import React from 'react';
import styles from '@/scss/components/sections/about.module.scss';
import Image from 'next/image';
import profileImg from "../../../public/thomi.jpg"
const About = () => {
  const descargarCV = () => {
    const url = '/CV-THOMAS REY.docx'; // Ruta al archivo en la carpeta public
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '/CV-THOMAS REY.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.aboutCont}>
      <p>
        Hola 👋, mi nombre es 
      </p>
      <div className={styles.titleImgCont}>
        <h1 className={styles.titleAnimated}>
          Thomas Rey
        </h1>
        <Image src={profileImg} alt="thomas rey" className={styles.img}/>
      </div>
      <p><span>y soy Full stack web developer</span></p>
      <p>
        Como desarrollador web full stack, me destaco por mi enfoque <em>resolutivo</em> y mi constante búsqueda de <em>mejora</em>. Mantengo un compromiso firme con el <em>aprendizaje continuo</em>, siempre explorando y dominando las nuevas <em>tecnologías</em> emergentes. Mi impulso proviene de la innovación y la pasión por enfrentar desafíos complejos.
      </p>
      <p>
        Mi objetivo principal es ofrecer resultados efectivos y una experiencia óptima para el usuario. Me esfuerzo por alcanzar la <em>eficacia</em> en cada proyecto, priorizando la <em>calidad</em> y la funcionalidad para garantizar que cada solución sea tanto <em>innovadora</em> como eficiente.
      </p>

      <button onClick={descargarCV}>Descargar CV</button>

    </section>
  );
};

export default About;

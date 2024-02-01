import './index.css'
import '../../assets/fonts/TRBalloon.ttf'
import Tarifs from '../../components/tarifs/prices'
import Separation from '../../components/separtion/separation'
import Course from '../../components/course/course'
import Coach from '../../components/coach/coach'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'

export default function Index() {

  return (
    <>
      <Navbar></Navbar>
      <div
        className='container-top-image'
      >
        <img
          className='top-image'
          src='src/assets/logo.png'
        ></img>
      </div>
      <Separation
        id='agenda'
        title="L'agenda"
      ></Separation>
      {/* TODO component Agenda to dev */}
      <Separation
        id='course'
        title="Les cours"
      ></Separation>
      <Course
        src='src/assets/courses/pilates.svg'
        title='Pilates'
        text="Ensemble d'exercices physiques visant au renforcement des muscles centraux et au bon équilibre du corps."
      ></Course>
       <Course
        src='src/assets/courses/pilates.svg'
        title='Circuit training'
        text="Ensemble d'exercices physiques visant au renforcement des muscles centraux et au bon équilibre du corps."
      ></Course>
      <Course
        src='src/assets/courses/stretching.svg'
        title='Stretching'
        text="Ensemble d'exercices physiques visant au renforcement des muscles centraux et au bon équilibre du corps."
      ></Course>
      <Separation
        id='tarifs'
        title="Tarifs"
      ></Separation>
      <Tarifs></Tarifs>
      <Separation
        id='coach'
        title="La Coach"
      ></Separation>
      <Coach></Coach>
      <Footer></Footer>
    </>
  )
}
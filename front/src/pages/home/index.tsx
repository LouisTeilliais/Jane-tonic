import './index.css'
import '../../assets/fonts/TRBalloon.ttf'
import Navbar from '../../components/element/navbar/navbar'
import Separation from '../../components/containers/separtion/separation'
import Diary from '../../components/containers/diary/diary'
import Course from '../../components/containers/course/course'
import Tarifs from '../../components/containers/tarifs/prices'
import Footer from '../../components/element/footer/footer'
import Coach from '../../components/containers/coach/coach'

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
      <Diary></Diary>
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
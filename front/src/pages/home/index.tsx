import './index.css'
import '../../assets/fonts/TRBalloon.ttf'
import Tarifs from '../../components/Tarifs/prices'
import Separation from '../../components/Separtion/Separation'
import Course from '../../components/Course/Course'

export default function Index() {

  return (
    <>
      {/* TODO Navbar */}
      <div
        className='container-top-image'
      >
        <img
          className='top-image'
          src='src/assets/logo.png'
        ></img>
      </div>
      <Separation
        title="L'agenda"
      ></Separation>
      {/* TODO component Agenda to dev */}
      <Separation
        title="Les cours"
      ></Separation>
      <Course
        src='src/assets/courses/pilates.svg'
        title='Pilates'
        text="Ensemble d'exercices physiques visant au renforcement des muscles centraux et au bon équilibre du corps."
      ></Course>
      <Course
        src='src/assets/courses/circuit-training.svg'
        title='Circuit training'
        text="Ensemble d'exercices physiques visant au renforcement des muscles centraux et au bon équilibre du corps."
      ></Course>
      <Course
        src='src/assets/courses/stretching.svg'
        title='Stretching'
        text="Ensemble d'exercices physiques visant au renforcement des muscles centraux et au bon équilibre du corps."
      ></Course>
      <Separation
        title="Tarifs"
      ></Separation>
      <Tarifs></Tarifs>
      {/* TODO image ou component Tarifs */}
      <Separation
        title="La Coach"
      ></Separation>
      {/* TODO image ou component La Coach */}
    </>
  )
}
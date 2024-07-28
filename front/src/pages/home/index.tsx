import './index.css';
import '../../assets/fonts/TRBalloon.ttf';
import Navbar from '../../components/element/navbar/navbar';
import Separation from '../../components/containers/separtion/separation';
import Diary from '../../components/containers/diary/diary';
import Course from '../../components/containers/course/course';
import Tarifs from '../../components/containers/tarifs/prices';
import Footer from '../../components/element/footer/footer';
import Coach from '../../components/containers/coach/coach';
import { useEffect, useState } from 'react';
import { getTopFiveSession } from '../../requests/session';

export default function Index() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const sessions = await getTopFiveSession();
        setSessions(sessions);
      } catch (error) {
        console.log("Failed to fetch sessions:", error);
      }
    };

    fetchSessions();
  }, []);

  return (
    <>
      <Navbar />
      <div className='container-top-image'>
        <img className='top-image' src='src/assets/logo.png' alt='Top' />
      </div>
      <Separation id='agenda' title="L'agenda" />
      <Diary sessions={sessions} />
      <Separation id='course' title="Les cours" />
      <Course
        src='src/assets/courses/pilates.svg'
        title='Pilates'
        text="Ensemble d'exercices physiques visant au renforcement des muscles centraux et au bon équilibre du corps."
      />
      <Course
        src='src/assets/courses/circuit-training.svg'
        title='Circuit training'
        text="Ensemble d'exercices physiques visant au renforcement des muscles centraux et au bon équilibre du corps."
      />
      <Course
        src='src/assets/courses/stretching.svg'
        title='Stretching'
        text="Ensemble d'exercices physiques visant au renforcement des muscles centraux et au bon équilibre du corps."
      />
      <Separation id='tarifs' title="Tarifs" />
      <Tarifs />
      <Separation id='coach' title="La Coach" />
      <Coach />
      <Footer />
    </>
  );
}

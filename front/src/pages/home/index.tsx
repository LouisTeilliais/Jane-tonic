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
        src='src/assets/courses/circuit_training_capbreton_ok.svg'
        title='Circuit training'
        text="Ensemble d'exercices de renforcement musculaire et cardiovasculaire proposés sous forme d'ateliers visant à améliorer et/ou entretenir une bonne condition physique."

      />
      <Course
        src='src/assets/courses/pilates_capbreton_ok.svg'
        title='Pilates'
        text="Ensemble d'exercices physiques visant à améliorer la posture, le bon équilibre du corps et à renforcer les muscles centraux."
      />
      <Course
        src='src/assets/courses/stretching_capbreton_ok.svg'
        title='Stretching & mobilité'
        text="Ensemble d'exercices visant à améliorer la liberté de mouvement, la mobilité articulaire, l'équilibre et la souplesse."
      />
      <Separation id='tarifs' title="Tarifs" />
      <Tarifs />
      <Separation id='coach' title="La Coach" />
      <Coach />
      <Footer />
    </>
  );
}

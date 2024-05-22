import { ReactElement, useState } from 'react';
import './diary-card.css';
import { Session } from '../../../types/session';

interface DiaryCardProps {
    session: Session;
  }
  

export default function DiaryCard({ session } : DiaryCardProps) : ReactElement {
  const [isReserved, setIsReserved] = useState(false);

  function getDayName(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
  }

  function getDayNumber(dateString: string): number {
    const date = new Date(dateString);
    return date.getDate();
  }

  function getMonthName(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { month: 'long' };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
  }
  
  const day = getDayName(session.date).toUpperCase()
  const month = getMonthName(session.date).toUpperCase()

  let color;
  switch (session.sessionType.sessionTypeId) {
    case 1: 
      color = "#30b4a6";
      break;
    case 2: 
      color = "#0069b4";
      break;
    case 3:
      color = "#e72f73";
      break;
    default:
      color = "#000000";
      break;
  }
  


  return (
    <>
    
        <div className="container-card" style={{ backgroundColor: color }}>
        <div className="container-date" style={{ color: color }}>
                <p className="date-day">{day}</p>
                <p className="date-number">{getDayNumber(session.date)}</p>
                <p className="date-month">{month}</p>
        </div>
        <div className="container-info">
            <div className="container-info-top">
                <p>
                    {session.hour}
                </p>
                <button
                    disabled={session.isFull}
                    onClick={() => setIsReserved(!isReserved)}
                >
                    {session.isFull ? 'COMPLET': 'RESERVER'}
                </button>
                </div>
                <div className="container-info-middle">
                    <p className="place-card">
                        {session.place}
                    </p>
                    <p className="title-card">
                        {session.sessionType.sessionType}
                    </p>
                    <p className="level-card">
                        {session.level.toUpperCase()}
                    </p>
                </div>
                {/* {isReserved && 
                    <div className="reservation-info">
                        hello
                    </div>
                } */}
            </div>
        </div>
        <br />
    </>
  );
}

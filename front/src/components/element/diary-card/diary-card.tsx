import { ReactElement, useState } from 'react';
import './diary-card.css';
import { addUser } from '../../../requests/user';
import { Session } from '../../../requests/models/session';

interface DiaryCardProps {
    session: Session;
}

export default function DiaryCard({ session }: DiaryCardProps): ReactElement {
  const [isReserved, setIsReserved] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false); // State for success message
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  function getDayName(dateString: Date): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
  }

  function getDayNumber(dateString: Date): number {
    const date = new Date(dateString);
    return date.getDate();
  }

  function getMonthName(dateString: Date) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { month: 'long' };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
  }

  const day = getDayName(session.date).toUpperCase();
  const month = getMonthName(session.date).toUpperCase();

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

  const handleReservation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await addUser(lastname, firstname, email, phoneNumber, session.sessionId);
      setReservationSuccess(true); // Show success message
      setErrorMessage(''); // Clear error message
    } catch (error) {
      console.error('Failed to reserve:', error);
      setErrorMessage('Échec de la réservation. Veuillez réessayer.');
    }
  };

  const resetCard = () => {
    setIsReserved(false);
    setReservationSuccess(false);
    setLastName('');
    setFirstName('');
    setPhone('');
    setEmail('');
    setErrorMessage('');
  };
  

  return (
    <>
      <div 
        className="container-card" 
        style={{ 
          backgroundColor: color, 
          height: isReserved ? '20rem' : '10rem',
          background: isReserved ? `linear-gradient(to bottom, ${color} 50%, #f7f7f7 50%)` : color
        }}>
        <div className="container-date" style={{ color: color }}>
          <p className="date-day">{day}</p>
          <p className="date-number">{getDayNumber(session.date)}</p>
          <p className="date-month">{month}</p>
          {isReserved && !reservationSuccess && (
            <>
              <div className='user-info-container'>
                <p>Nom</p>
                <p>Prénom</p>
                <p>Email</p>
                <p>Téléphone</p>
              </div>
            </>
          )}
        </div>
        <div className="container-info">
          <div className="container-info-top">
            <p>{session.hour}</p>
            {!isReserved && !reservationSuccess && (
              <button
                disabled={session.isFull}
                onClick={() => setIsReserved(true)}
              >
                {session.isFull ? 'COMPLET' : 'RESERVER'}
              </button>
            )}
          </div>
          <div className="container-info-middle">
            <p className="place-card">{session.place}</p>
            <p className="title-card">{session.sessionType.sessionType}</p>
            <p className="level-card">{session.level.toUpperCase()}</p>
          </div>
          {isReserved && !reservationSuccess && (
            <>
              <form onSubmit={handleReservation} className='input-user-container'>
                <input 
                  type="text" 
                  name="lastname" 
                  placeholder="Nom"
                  value={lastname} 
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input 
                  type="text" 
                  name="firstname" 
                  placeholder="Prénom"
                  value={firstname} 
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email"
                  value={email} 
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                  type="tel" 
                  name="phoneNumber" 
                  placeholder="Téléphone"
                  value={phoneNumber} 
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errorMessage && (
                  <div className="error-message-container" style={{ color: 'red' }}>
                    <p className="error-message">{errorMessage}</p>
                  </div>
                )}
                <div className='button-reservation-container'>
                  <button
                    type="button" 
                    onClick={resetCard}
                    className='close-card'
                  >
                    ANNULER
                  </button>
                  <button
                    type="submit"
                    disabled={session.isFull}
                  >
                    {session.isFull ? 'COMPLET' : 'RESERVER'}
                  </button>
                </div>
              </form>
            </>
          )}
          {reservationSuccess && (
            <div className='success-message-container' style={{ color: color }}>
              <p className="success-message">Votre réservation a bien été prise en compte !</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
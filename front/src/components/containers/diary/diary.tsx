import { ReactElement } from 'react';
import './diary.css';
import DiaryCard from '../../element/diary-card/diary-card';
import { Session } from '../../../requests/models/session';

interface DiaryProps {
  sessions: Session[];
}

export default function Diary({ sessions }: DiaryProps): ReactElement {
  return (
    <div className="diary-container">
      {sessions.map(session => (
        <DiaryCard key={session.sessionId} session={session} />
      ))}
    </div>
  );
}

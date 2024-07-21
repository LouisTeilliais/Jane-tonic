import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Session } from "../../../requests/models/session";
import Card from "../../../components/containers/card/card.component";
import TextField from "../../../components/inputs/text-field/text-field.component";
import './index.css';
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { deleteSession, getSessionById, upsertSession } from "../../../requests/session";
import { PrimaryButton } from "@fluentui/react";
import { NEW } from "../../../types/other";
import { getParams } from "../../../requests/params";

export default function AdminIndex() {
    const { sessionId } = useParams();

    const [session, setSession] = useState<Session | null>(null);
    const [isReadOnly, setIsReadOnly] = useState(true);
    const navigate = useNavigate();


    const [hour, setHour] = useState('');
    const [level, setLevel] = useState('');
    const [place, setPlace] = useState('');
    const [numberUserMax, setNumberUserMax] = useState('');
    const [date, setDate] = useState<Date | null>(null);

    const [sessionTypes, setSessionTypes] = useState<{sessionTypeId: number, sessionType : string}[]>([]);
    const [sessionTypeId, setSessionTypeId] = useState<number | null>(null);


    const handleSelectDate = (date: Date | null | undefined) => {
        setDate(date ?? null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const sessionData: Partial<Session> = {
            hour,
            level,
            place,
            numberUserMax: Number(numberUserMax),
            date: date !== null ? date : undefined, 
            sessionTypeId: sessionTypeId!
        };

        try {
            const result = await upsertSession(sessionData, sessionId!);
            navigate('/admin');

            console.log('Session upserted:', result);
        } catch (error) {
            console.error('Failed to upsert session:', error);
        }
    };

    console.log(session)

    useEffect(() => {
        if (sessionId !== NEW) {
            // Fetch session data based on sessionId
            const fetchSession = async () => {
                try {
                    const sessionData = await getSessionById(sessionId!);
                    const sessionTypes = await getParams();

                    setSessionTypes(sessionTypes.params.sessionTypes);

                    console.log(sessionTypes.params.sessionTypes)

                    setSession(sessionData);
                    setHour(sessionData.hour);
                    setLevel(sessionData.level);
                    setPlace(sessionData.place);
                    setNumberUserMax(String(sessionData.numberUserMax));
                    setDate(sessionData.date ? new Date(sessionData.date) : null);
                    setSessionTypeId(sessionData.sessionTypeId)
                    setIsReadOnly(true);
                } catch (error) {
                    console.error('Failed to fetch session:', error);
                }
            };

            fetchSession();
        } else {
            setIsReadOnly(false);
        }
    }, [location.pathname, sessionId]);


    return (
        <>
            <br />
            <form onSubmit={handleSubmit}>
                <Card title={sessionId === `${NEW}` ? 'Nouvelle session' : `Consulter la session n°${session?.sessionId}`}>
                    <br />
                    <div>
                        <TextField
                            label="Lieu"
                            placeholder="Lieu"
                            type="text"
                            onChange={(e) => setPlace(e.target.value)}
                            value={place}
                        />
                        <TextField
                            label="Heure"
                            placeholder="Heure"
                            type="text"
                            onChange={(e) => setHour(e.target.value)}
                            value={hour}
                        />
                        <TextField
                            label="Niveau"
                            placeholder="Niveau"
                            type="text"
                            onChange={(e) => setLevel(e.target.value)}
                            value={level}
                        />
                        <TextField
                            label="Nombre de participant max."
                            placeholder="Nombre de participant max."
                            type="text"
                            onChange={(e) => setNumberUserMax(e.target.value)}
                            value={numberUserMax}
                        />
                        <DatePicker
                            placeholder="Selectionne une date.."
                            value={date}
                            onSelectDate={handleSelectDate}
                        />
                    </div>
                    <br />
                    <label htmlFor="sessionType">Type de session</label>
                    <select
                            id="sessionType"
                            value={sessionTypeId || ''}
                            onChange={(e) => setSessionTypeId(Number(e.target.value))}
                        >
                            <option value="" disabled>Sélectionner un type de session</option>
                            {sessionTypes.map((type) => (
                                <option key={type.sessionTypeId} value={type.sessionTypeId}>
                                    {type.sessionType}
                                </option>
                            ))}
                        </select>
                    {/* <select
                        id="sessionType"
                        value={sessionTypeId || ''}
                        onChange={(e) => setSessionTypeId(Number(e.target.value))}
                    >
                        <option value="" disabled>Sélectionner un type de session</option>
                        {sessionTypes.map((type) => (
                            <option key={type.sessionTypeId} value={type.sessionTypeId}>
                                {type.sessionType}
                            </option>
                        ))}
                    </select> */}
                    <br />
                    <div className="container-button">
                        <PrimaryButton className="submit-button" type="submit">{sessionId === `${NEW}` ? 'Créer session' : 'Modifier la session'}</PrimaryButton>
                        {
                            sessionId !== `${NEW}` && (
                                <PrimaryButton color="red" className="delete-button" onClick={() => deleteSession(sessionId!)}>Supprimer la session</PrimaryButton>
                            )
                        }
                    </div>
                </Card>
            </form>
        </>
    );
}

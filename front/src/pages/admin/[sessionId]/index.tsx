import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../../components/containers/card/card.component";
import TextField from "../../../components/inputs/text-field/text-field.component";
import './index.css';
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { deleteSession, getSessionById, upsertSession } from "../../../requests/session";
import { PrimaryButton } from "@fluentui/react";
import { NEW } from "../../../types/other";
import { getParams } from "../../../requests/params";
import VirtualizedDatagrid from "../../../components/containers/virtualized-datagrid/virtualized-datagrid";
import { TableColumnDefinition, createTableColumn } from "@fluentui/react-components";
import { Session, User } from '../../../requests/models/session.ts'
import { RESOLVED } from "../../../requests/models/status.ts";

const columns: Array<TableColumnDefinition<User>> = [
    createTableColumn<User>({
        columnId: 'firstname',
        compare: (a, b) => (a.firstname || '').localeCompare(b.firstname || ''),
        renderHeaderCell: () => 'Prénom',
        renderCell: item => item.firstname,
    }),
    createTableColumn<User>({
        columnId: 'lastname',
        compare: (a, b) => (a.lastname || '').localeCompare(b.lastname || ''),
        renderHeaderCell: () => 'Nom',
        renderCell: item => item.lastname,
    }),
    createTableColumn<User>({
        columnId: 'email',
        compare: (a, b) => (a.email || '').localeCompare(b.email || ''),
        renderHeaderCell: () => 'Email',
        renderCell: item => item.email,
    }),
    createTableColumn<User>({
        columnId: 'phoneNumber',
        compare: (a, b) => (a.phoneNumber || '').localeCompare(b.phoneNumber || ''),
        renderHeaderCell: () => 'Numéro',
        renderCell: item => item.phoneNumber,
    }),
]

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
    const [sessionTypes, setSessionTypes] = useState<{ sessionTypeId: number, sessionType: string }[]>([]);
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

    const handleDelete = async (sessionId: string) => {
        try {
            await deleteSession(sessionId);
            navigate('/admin');
        } catch (error) {
            console.error('Failed to delete session:', error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sessionTypes = await getParams();
                setSessionTypes(sessionTypes.params.sessionTypes);

                if (sessionId !== NEW) {
                    const sessionData = await getSessionById(sessionId!);
                    setSession(sessionData);
                    setHour(sessionData.hour);
                    setLevel(sessionData.level);
                    setPlace(sessionData.place);
                    setNumberUserMax(String(sessionData.numberUserMax));
                    setDate(sessionData.date ? new Date(sessionData.date) : null);
                    setSessionTypeId(sessionData.sessionTypeId);
                    setIsReadOnly(true);
                } else {
                    setIsReadOnly(false);
                }
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [sessionId]);
    
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
                        className="select-sport"
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
                    <br />
                    <div className="container-button">
                        <PrimaryButton className="submit-button" type="submit">{sessionId === `${NEW}` ? 'Créer session' : 'Modifier la session'}</PrimaryButton>
                        {
                            sessionId !== `${NEW}` && (
                                <PrimaryButton color="red" className="delete-button" onClick={() => handleDelete(sessionId!)}>Supprimer la session</PrimaryButton>
                            )
                        }
                    </div>
                </Card>
                <br />
                {session && (
                    <Card title={'Participants'}>
                        <VirtualizedDatagrid
                            items={session.users}
                            columns={columns}
                            columnSizingOptions={{
                                email: {
                                    minWidth: 100,
                                    defaultWidth: 150,
                                },
                                firstname: {
                                    minWidth: 100,
                                    defaultWidth: 150,
                                },
                                lastname: {
                                    minWidth: 100,
                                    defaultWidth: 150,
                                },
                                phone: {
                                    minWidth: 100,
                                    defaultWidth: 150,
                                },
                            }}
                            defaultSortState={{
                                sortColumn: 'sessionId',
                                sortDirection: 'ascending',
                            }} status={RESOLVED}
                        />
                    </Card>
                )}
            </form>
        </>
    );
}

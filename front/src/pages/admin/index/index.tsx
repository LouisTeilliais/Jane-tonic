import { useEffect, useState } from "react";
import { getAllSession } from "../../../requests/session";
import {
    TableColumnDefinition,
    createTableColumn,
  } from "@fluentui/react-components";
import { Session } from "../../../requests/models/session";
import VirtualizedDatagrid from "../../../components/containers/virtualized-datagrid/virtualized-datagrid";
import { RESOLVED } from "../../../requests/models/status";
import Card from "../../../components/containers/card/card.component";
import './index.css'
import { PrimaryButton } from "@fluentui/react";
import { useNavigate } from "react-router-dom"
import { NEW } from "../../../types/other";

const columns: Array<TableColumnDefinition<Session>> = [
    createTableColumn<Session>({
        columnId: 'date',
        compare: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        renderHeaderCell: () => 'Date',
        renderCell: item => (new Date(item.date).toLocaleDateString()),
    }),
    createTableColumn<Session>({
        columnId: 'hour',
        compare: (a, b) => (a.hour || '').localeCompare(b.hour || ''),
        renderHeaderCell: () => 'Heure',
        renderCell: item => item.hour,
    }),
    createTableColumn<Session>({
        columnId: 'place',
        compare: (a, b) => (a.place || '').localeCompare(b.place || ''),
        renderHeaderCell: () => 'Lieu',
        renderCell: item => item.place,
    }),
    createTableColumn<Session>({
        columnId: 'numberUserMax',
        renderHeaderCell: () => 'Places maximum',
        renderCell: item => item.numberUserMax,
    }),
    createTableColumn<Session>({
        columnId: 'numberUser',
        renderHeaderCell: () => 'Places restante',
        renderCell: item => item.isFull ? "Complet" : item.numberUserMax - item.numberUserReserved,
    }),
    createTableColumn<Session>({
        columnId: 'level',
        compare: (a, b) => (a.level || '').localeCompare(b.level || ''),
        renderHeaderCell: () => 'Niveau',
        renderCell: item => item.level,
    }),
    createTableColumn<Session>({
        columnId: 'sessionType',
        compare: (a, b) => (a.sessionType.sessionType || '').localeCompare(b.sessionType.sessionType || ''),
        renderHeaderCell: () => 'Type de séance',
        renderCell: item => item.sessionType.sessionType,
    }),
    
]

export default function Admin() {
    const [sessions, setSessions] = useState<Session[]>([]);

    useEffect(() => {
        const fetchSessions = async () => {
          try {
            const sessions = await getAllSession();
            setSessions(sessions);
          } catch (error) {
            console.log("Failed to fetch sessions:", error);
          }
        };
    
        fetchSessions();
    }, []);
    
    const navigate = useNavigate()
   
    return (
        <>
            <br />
            <Card>
                <PrimaryButton
                    onClick={() => navigate(`${NEW}`)}
                >
                    Nouvelle session
                </PrimaryButton>
            </Card>
            <br />
            <Card
                title="Sessions"
            >
                <VirtualizedDatagrid
                    items={sessions}
                    columns={columns}
                    columnSizingOptions={{
                        date: {
                            minWidth: 100,
                            defaultWidth: 150,
                        },
                        sessionId: {
                            minWidth: 100,
                            defaultWidth: 150,
                        },
                        hour: {
                            minWidth: 100,
                            defaultWidth: 150,
                        },
                        place: {
                            minWidth: 100,
                            defaultWidth: 150,
                        },
                        numberUser: {
                            minWidth: 100,
                            defaultWidth: 150,
                        },
                        level: {
                            minWidth: 100,
                            defaultWidth: 150,
                        },
                        sessionType: {
                            minWidth: 100,
                            defaultWidth: 150,
                        },
                    }}
                    pathLink={x => `/admin/${x?.sessionId}`}
                    status={RESOLVED}
                    defaultSortState={{
                        sortColumn: 'sessionId',
                        sortDirection: 'ascending',
                    }}
                />
            </Card>
        </>
    )
}
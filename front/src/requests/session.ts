import axios from "axios";
import { Session } from "./models/session";
import { NEW } from "../types/other";

const API_BASE_URL = 'http://localhost:5001/api'

export async function getTopFiveSession() {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/sessions/next`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export async function getAllSession() {
    try {
        const token = sessionStorage.getItem('accessToken');

        const response = await axios.get(
            `${API_BASE_URL}/sessions`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export async function upsertSession(session: Partial<Session>, sessionId: string) {
    try {
        const token = sessionStorage.getItem('accessToken');

        if (!token) {
            throw new Error('No token found');
        }

        const response = sessionId !== NEW
            ? await axios.put(`${API_BASE_URL}/sessions/${sessionId}`, session,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                }) 
            : await axios.post(`${API_BASE_URL}/sessions`, session, 
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                }); 

        console.log(sessionId)

        return response.data;
    } catch (error) {
        console.error('Error upserting session:', error);
        throw error; 
    }
}

export const getSessionById = async (sessionId: string) => {
    try {
        const token = sessionStorage.getItem('accessToken');

        if (!token) {
            throw new Error('No token found');
        }

        const response = await axios.get(
            `${API_BASE_URL}/sessions/${sessionId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching session by ID:', error);
        throw error;
    }
};


export const deleteSession = async(sessionId: string) => {
    try {
        const token = sessionStorage.getItem('accessToken');

        if (!token) {
            throw new Error('No token found');
        }

        const response = await axios.delete(
            `${API_BASE_URL}/sessions/${sessionId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error deleting session by ID:', error);
        throw error;
    }
}
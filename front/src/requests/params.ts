import axios from "axios";
import { BASE_URL } from "../types/other";

export async function getParams() {

    const token = sessionStorage.getItem('accessToken');
    
    try {
        const response = await axios.get(
            `${BASE_URL}params`,
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
}

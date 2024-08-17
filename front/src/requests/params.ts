import axios from "axios";

const API_BASE_URL = 'http://localhost:5001/api'


export async function getParams() {

    const token = sessionStorage.getItem('accessToken');
    
    try {
        const response = await axios.get(
            `${API_BASE_URL}/params`,
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

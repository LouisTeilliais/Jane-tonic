import axios from "axios";

export const getAllSession = async () => {
    try {
        const response = await axios.get(
            'http://localhost:5001/api/sessions',
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

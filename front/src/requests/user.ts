import axios from "axios";
import { BASE_URL } from "../types/other";


export const postLogin = (
    email: string,
    password: string
)=> {
    try {
        return axios.post(
                `${BASE_URL}auth/login`,
                {
                    email: email,
                    password: password
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            ).then((response) => {
                const accessToken = response.data.accessToken
                sessionStorage.setItem('accessToken', accessToken)
            }, 
            (error) => {
                console.log(error);
            }
        )

    } catch (error) {
        console.log(error);
    }
}

export const addUser = (
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: string,
    sessionId: number
) => {
    try {
        return axios.post(
                `${BASE_URL}/api/user`,
                {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    phoneNumber: phoneNumber,
                    sessionId: sessionId
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
    } catch (error) {
        console.log(error);
    }
}
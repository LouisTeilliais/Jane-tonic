import axios from "axios";


// const baseUrl = process.env.APP_PORT

export const postLogin = (
    email: string,
    password: string
)=> {
    try {
        return axios.post(
                `http://localhost:5001/api/auth/login`,
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
                `http://localhost:5001/api/user`,
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
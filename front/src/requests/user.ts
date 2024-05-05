import axios from "axios";


// const baseUrl = process.env.APP_PORT

export const postLogin = (
    email: string,
    password: string
)=> {
    try {
        return axios.post
            (
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
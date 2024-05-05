import './index.css'
import logo from '../../../public/logo.png'
import TextField from '../../components/inputs/text-field/text-field.component'
import ButtonCustom from '../../components/inputs/button/button.component'
import { postLogin } from '../../requests/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onClickLogin = async () => {
        try {
            await postLogin(email, password);
            navigate('/admin');
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className={'container-login'}>
            <div className={"login-card"}>
                <div className={'login-image'}>
                    <img src={logo} />
                </div>
                <div className={'input-container'}>
                    <TextField
                        label='Email'
                        placeholder='Email'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    ></TextField>
                    <TextField
                        label='Mot de passe'
                        placeholder='Mot de passe'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    ></TextField>
                </div>
                <div className={'button-container'}>
                    <ButtonCustom
                        text='Se connecter'
                        onClick={onClickLogin}
                    >
                    </ButtonCustom>
                </div>

            </div>
        </div>
    )
}
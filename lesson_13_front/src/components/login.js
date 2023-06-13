import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const submit = async () => {
        try {
            setErrorMessage('');
            const loginResponse = await axios.post('/user/login', {
                email, password
            })
            localStorage.setItem('accessToken', loginResponse.data.accessToken);
            navigate('/posts')
        } catch(error) {
            console.log(error.response)
            if(error.response) {
                setErrorMessage(error.response.data.message)
            }else {
                setErrorMessage(error.message)
            }
        }
    }

    return (
        <div>
            <p><input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" /></p>
            <p><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" /></p>
            <button onClick={submit}>Login</button>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
}

export default Login;
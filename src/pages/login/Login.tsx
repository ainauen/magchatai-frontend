import { Button } from "react-bootstrap";
import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUserSession } from "../../utils/common";
import { SignInButton } from "../../components/SignInButton";


const Login = (props: any) => {

    const[error, setError] = useState<string| null>(null);
    const[loading, setLoading] = useState(false);
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = () => {

        setError(null);
        setLoading(true);

        axios.post("https://localhost:44377/api/Auth/login",{
            email: username,
            password: password
        }).then(response => {
            setLoading(false);
            setUserSession(response.data)
            navigate('/dashboard')
            //console.log('response >>> ', response.data);
        }).catch(error =>{
            setLoading(false);
            if (error.response.status === 401 || error.response.status === 400) {
                console.log("error >>>", error.response.data)
                setError(error.response.data)
            } else{
                setError("something went wrong")
            }
            //console.error('error >>> ', error);
        });
        //navigate('/dashboard')
        //this.props.history.push('/dashboard')
    }

    return (
        <div className="login">
            Login Page <br/><br/>
            <div>
                Username <br/>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>

            </div>
            <div className="password">
                Password <br/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/> 
            </div><br/>
            {error && <p className="error">{error}</p>}
            <Button variant="warning" disabled={loading} onClick={handleLogin}>Login</Button>
            <div>
                <p>below is sign in with Azure Add</p>
            </div>
            <div>
                <SignInButton />
            </div>
        </div>
    );
}

export default Login;
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/token/', credentials)
            .then(response => {
                localStorage.setItem('token', response.data.access);
                // Redirect or update state
            })
            .catch(error => {
                // Handle error
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} placeholder="Username" required />
            <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
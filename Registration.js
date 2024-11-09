import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [userType, setUser Type] = useState('student');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        bio: '',
        experience: 0,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // API call to register the user
        axios.post('http://localhost:8000/api/register/', { ...formData, userType })
            .then(response => {
                // Handle success
            })
            .catch(error => {
                // Handle error
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <select onChange={(e) => setUser Type(e.target.value)}>
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
            </select>
            <input type="text" name="username" onChange={handleChange} placeholder="Username" required />
            <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
            {userType === 'instructor' && (
                <>
                    <input type="text" name="name" on Change={handleChange} placeholder="Name" required />
                    <textarea name="bio" onChange={handleChange} placeholder="Bio" required />
                    <input type="number" name="experience" onChange={handleChange} placeholder="Experience (years)" required />
                </>
            )}
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
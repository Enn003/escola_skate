import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookClass() {
    const [lessons, setLessons] = useState([]);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        // Fetch available lessons
        axios.get('http://localhost:8000/api/lessons/')
            .then(response => {
                setLessons(response.data);
            })
            .catch(error => {
                // Handle error
            });
    }, []);

    const handleBooking = () => {
        axios.post('http://localhost:8000/api/bookings/', {
            lesson: selectedLesson,
            date,
            time,
        })
        .then(response => {
            // Handle success
        })
        .catch(error => {
            // Handle error
        });
    };

    return (
        <div>
            <h2>Book a Class</h2>
            <select onChange={(e) => setSelectedLesson(e.target.value)}>
                <option value="">Select a lesson</option>
                {lessons.map(lesson => (
                    <option key={lesson.id} value={lesson.id}>{lesson.title}</option>
                ))}
            </select>
            <input type="date" onChange={(e) => setDate(e.target.value)} required />
            <input type="time" onChange={(e) => setTime(e.target.value)} required />
            <button onClick={handleBooking}>Book Class</button>
        </div>
    );
}

export default BookClass;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Fetch all bookings
        axios.get('http://localhost:8000/api/bookings/')
            .then(response => {
                setBookings(response.data);
            })
            .catch(error => {
                // Handle error
            });
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Instructor</th>
                        <th>Student</th>
                        <th>Lesson</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.id}>
                            <td>{booking.instructor.name}</td>
                            <td>{booking.student.username}</td>
                            <td>{booking.lesson.title}</td>
                            <td>{booking.date}</td>
                            <td>{booking.time}</td>
                            <td>{booking.payment_status ? 'Paid' : 'Pending'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDashboard;
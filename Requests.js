const token = localStorage.getItem('token');

axios.get('http://localhost:8000/api/bookings/', {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
.then(response => {
    // Handle success
})
.catch(error => {
    // Handle error
});
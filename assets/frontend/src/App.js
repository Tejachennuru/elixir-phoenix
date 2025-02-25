import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]); // Ensure initial state is an array

    useEffect(() => {
        axios.get("/users") // Adjust endpoint if necessary
            .then(response => {
                console.log("API Response:", response.data); // Debugging log
                setUsers(Array.isArray(response.data.users) ? response.data.users : []); // Extract the array
            })
            .catch(error => {
                console.error("Error fetching users:", error);
                setUsers([]); // Fallback to an empty array
            });
    }, []);

    return (
        <div>
            <h1>Forum Users</h1>
            <ul>
                {users.length > 0 ? (
                    users.map(user => <li key={user.id}>{user.name}</li>)
                ) : (
                    <p>No users found.</p>
                )}
            </ul>
        </div>
    );
}

export default App;

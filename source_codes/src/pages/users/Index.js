import { useEffect, useState } from "react";
import ListUsers from "./List";


const IndexUser = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, []);

    return (
        <section className="my-5">
            <div className="container">
                <div className="row g-3">
                    <h2>Users List:</h2>
                    <p>Here is a list of our users using the fetch API from the jsonplaceholder.typicode.com server. This component also includes loading until the API is received and displaying possible errors in the UI section.</p>
                    {error && <div className="fw-bold text-danger">{error}</div>}
                    {loading && <div className="d-flex">
                        <span className="spinner-border me-3"></span>
                        <p className="fw-bold fs-4">Loading...</p>
                    </div>}
                    {users && <ListUsers users={users} />}
                </div>
            </div>
        </section>
    );
}

export default IndexUser;
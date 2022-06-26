import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
const ShowUser = () => {

    const { userId } = useParams();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [userId]);

    return (
        <section className="my-5">
            <div className="container">
                <div className="row g-3">
                    <h2>User Information:</h2>
                    <p>Here is an information of our users using the fetch API from the jsonplaceholder.typicode.com server. This component also includes loading until the API is received and displaying possible errors in the UI section.</p>
                    <div className="d-flex justify-content-start">
                        <NavLink className="btn btn-outline-dark me-1" to="/"><i className="bi bi-house-door"></i> Back To Home</NavLink>
                        <NavLink className="btn btn-secondary ms-1" to="/users"><i className="bi bi-people"></i> To Users List</NavLink>
                    </div>
                    {error && <div className="fw-bold text-danger">{error}</div>}
                    {loading && <div className="d-flex">
                        <span className="spinner-border me-3"></span>
                        <p className="fw-bold fs-4">Loading...</p>
                    </div>}
                    {user && <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fw-bold">
                                <span>{user.name}</span>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"> UserName: <span className="text-primary">{user.username}</span></li>
                                <li className="list-group-item"> E-Mail: <span className="text-primary">{user.email}</span></li>
                                <li className="list-group-item"> Phone: <span className="text-primary">{user.phone}</span></li>
                                <li className="list-group-item"> Address: <span className="text-primary">{user.address.street}, {user.address.suite}</span></li>
                                <li className="list-group-item"> City/Zip Code: <span className="text-primary">{user.address.city}, {user.address.zipcode}</span></li>
                                <li className="list-group-item"> Company: <span className="text-primary">{user.company.name}</span></li>
                                <li className="list-group-item"> Website: <span className="text-primary">{user.website}</span></li>
                            </ul>
                        </div>
                    </div>}
                </div>
            </div>
        </section>

    )
}

export default ShowUser;
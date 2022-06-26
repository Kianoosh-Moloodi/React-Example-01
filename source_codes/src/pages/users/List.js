import { Link } from "react-router-dom";

const ListUsers = ({ users }) => {
    return (
        <>
            {users.map(user => (
                <div className="col-md-4" key={user.id}>
                    <div className="card">
                        <div className="card-header fw-bold">
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> UserName: <span className="text-primary">{user.username}</span></li>
                            <li className="list-group-item"> E-Mail: <span className="text-primary">{user.email}</span></li>
                            <li className="list-group-item"> Phone: <span className="text-primary">{user.phone}</span></li>
                            <li className="list-group-item"> Company: <span className="text-primary">{user.company.name}</span></li>
                        </ul>
                    </div>
                </div>
            ))}

        </>
    )


}

export default ListUsers;
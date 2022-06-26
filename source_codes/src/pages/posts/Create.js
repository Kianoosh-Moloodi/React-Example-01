import { useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setError(null)
                Swal.fire({
                    title: "Created!",
                    text: "Post Created Successfully",
                    icon: "success",
                    confirmButtonText: "OK"
                });
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            });
    }
    return (
        <section className="my-5">
            <div className="container">
                <div className="row g-3">
                    <h2>Post Creator:</h2>
                    <p>Here is a post create section that using the fetch API from the jsonplaceholder.typicode.com server. This component also includes loading until the API is received and displaying possible errors in the UI section.</p>
                    <div className="d-flex justify-content-start mb-2">
                        <NavLink className="btn btn-outline-dark me-1" to="/"><i className="bi bi-house-door"></i> Back To Home</NavLink>
                        <NavLink className="btn btn-secondary ms-1" to="/posts"><i className="bi bi-people"></i> To Post List</NavLink>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
                            <div className="form-text text-danger">
                                {title ? '' : 'Title is required'}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Body</label>
                            <textarea onChange={(e) => setBody(e.target.value)} className="form-control" rows="3"></textarea>
                            <div className="form-text text-danger">
                                {body ? '' : 'Body is required'}
                            </div>
                        </div>
                        <button className="btn btn-success" type="submit" disabled = {title === '' || body === ''}>{loading && <div className="spinner-border spinner-border-sm me-2"></div>}Create Post</button>
                        {error && <div className="fw-bold text-danger">{error}</div>}
                    </form>
                </div>
            </div>
        </section>
    )

}
export default CreatePost;
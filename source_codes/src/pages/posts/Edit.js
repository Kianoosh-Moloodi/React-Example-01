import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import EditFormPost from "./EditFormPost";

const EditPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [postId]);

    return (
        <section className="my-5">
            <div className="container">
                <div className="row g-3">
                    <h2>Post Editor:</h2>
                    <p>Here is a post editor section that using the fetch API from the jsonplaceholder.typicode.com server. This component also includes loading until the API is received and displaying possible errors in the UI section.</p>
                    <div className="d-flex justify-content-start mb-2">
                        <NavLink className="btn btn-outline-dark me-1" to="/"><i className="bi bi-house-door"></i> Back To Home</NavLink>
                        <NavLink className="btn btn-secondary ms-1" to="/posts"><i className="bi bi-people"></i> To Post List</NavLink>
                    </div>
                    {error && <div className="fw-bold text-danger">{error}</div>}
                    {loading && <div className="d-flex">
                        <span className="spinner-border me-3"></span>
                        <p className="fw-bold fs-4">Loading...</p>
                    </div>}
                    {post && <EditFormPost post={post} />}
                </div>
            </div>
        </section>
    )

}

export default EditPost;
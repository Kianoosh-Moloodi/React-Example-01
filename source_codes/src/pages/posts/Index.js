import { useEffect, useState } from "react";
import ListPosts from "./List";


const IndexPost = () => {

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data)
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
                <div className="row">
                    <h2>Post List:</h2>
                    <p>Here is a list of our posts using the fetch API from the jsonplaceholder.typicode.com server. This component also includes loading until the API is received and displaying possible errors in the UI section.</p>
                    {error && <div className="fw-bold text-danger">{error}</div>}
                    {loading && <div className="d-flex">
                        <span className="spinner-border me-3"></span>
                        <p className="fw-bold fs-4">Loading...</p>
                    </div>}
                    {posts && <ListPosts posts={posts} />}
                </div>
            </div>
        </section>
    );
}

export default IndexPost;
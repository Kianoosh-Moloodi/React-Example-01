import { useState } from "react";
import Swal from "sweetalert2";

const DeletePost = ({ postId }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = () => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
        })
            .then((res) => {
                setLoading(false)
                setError(null)
                Swal.fire({
                    title: "Deleted!",
                    text: "Post Deleted Successfully",
                    icon: "success",
                    confirmButtonText: "OK"
                });

            }).catch(err => {
                setLoading(false)
                setError(err.message)
            });

    }

    return (
        <>
            <button onClick={handleDelete} className="btn btn-danger mx-1">
                {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
                Delete
            </button>
            {error && <div className="fw-bold text-danger">{error}</div>}
        </>
    )

}

export default DeletePost;
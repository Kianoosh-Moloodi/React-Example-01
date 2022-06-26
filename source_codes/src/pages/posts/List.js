import { NavLink } from "react-router-dom";

const ListPosts = ({ posts }) => {
    return (
        <>
            <div className="row">
                <div className="d-flex justify-content-start mt-3 mb-3">
                    <NavLink className="btn btn-success" to="/posts/create"><i className="bi bi-file-earmark-plus"></i> Create New Post</NavLink>
                </div>
            </div>
            {posts.map(post => (
                <div className="col-12" key={post.id}>
                    <div className="card">
                        <div className="card-header fw-bold">
                            <NavLink to={`/posts/${post.id}`}>{post.id} - {post.title}</NavLink>
                        </div>
                        <div className="card-body">
                            {post.body}
                        </div>
                    </div>
                </div>
            ))}

        </>
    )


}

export default ListPosts;
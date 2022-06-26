import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <section className="bg-light fw-bold border-bottom py-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 d-flex align-items-center justify-content-center justify-content-lg-start">
                        <NavLink className="fs-4" to="/">React Example 01</NavLink>
                    </div>
                    <div className="col-md-9">
                        <ul className="d-flex nav align-items-center justify-content-center justify-content-lg-start">
                            <li>
                                <NavLink className={(navData) => navData.isActive ? "navActive" : "nav-link"} to="/"><i className="bi bi-house-door"></i> Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={(navData) => navData.isActive ? "navActive" : "nav-link"} to="/users"><i className="bi bi-people"></i> Users</NavLink>
                            </li>
                            <li className="me-3">
                                <NavLink className={(navData) => navData.isActive ? "navActive" : "nav-link"} to="/posts"><i className="bi bi-stickies"></i> Posts</NavLink>
                            </li>
                            <li>
                                <a className="me-3" href="https://www.linkedin.com/in/kianoosh-moloodi/" target="_blank"><i className="bi bi-linkedin"></i> LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://github.com/Kianoosh-Moloodi" target="_blank"><i className="bi bi-github"></i> Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;

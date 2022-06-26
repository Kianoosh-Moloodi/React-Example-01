const Footer = () => {
    return (
        <footer className="bg-light p-4 fw-bold border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="fw-bold">Kianoosh Moloodi</h4>
                        <p>
                            I scrolled millions of miles with my computer mouse to learn more.
                            My mission is now to convey helpful information to those who love
                            learning.
                        </p>
                        <i className="bi bi-instagram fs-5 mx-1"></i>
                        <i className="bi bi-linkedin fs-5 mx-1"></i>
                        <i className="bi bi-twitter fs-5 mx-1"></i>
                        <i className="bi bi-whatsapp fs-5 mx-1"></i>
                    </div>
                    <div className="col-md-7 offset-md-1 mt-2">
                        <div className="row">
                            <div className="col-md-4">
                                <h6 className="fw-bold footer-header">My Links</h6>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="footer-link"
                                            href="https://www.linkedin.com/in/kianoosh-moloodi/" target="_blank"
                                        >Linkedin</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            className="footer-link"
                                            href="https://github.com/Kianoosh-Moloodi" target="_blank"
                                        >Github</a
                                        >
                                    </li>
                                    <li>
                                        <a className="footer-link" href="https://onlinemag24.com/" target="_blank"
                                        >Blog</a
                                        >
                                    </li>
                                    <li>
                                        <a className="footer-link" href="https://kmagroute.com/" target="_blank"
                                        >Portfolio</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h6 className="fw-bold footer-header">Examples</h6>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="footer-link"
                                            href="https://github.com/Kianoosh-Moloodi/Weather-App" target="_blank"
                                        >Weather App</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            className="footer-link"
                                            href="https://github.com/Kianoosh-Moloodi/Bootstrap-Sass-Ep1" target="_blank"
                                        >Bootstrap Sass Page
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="footer-link"
                                            href="https://github.com/Kianoosh-Moloodi/Bootstrap-ep2" target="_blank"
                                        >Bootstrap Js Page</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            className="footer-link"
                                            href="https://github.com/Kianoosh-Moloodi/Sass-Example-Page" target="_blank"
                                        >Sass Page</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h6 className="fw-bold footer-header">Categories</h6>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="footer-link" href="#">React JS</a>
                                    </li>
                                    <li>
                                        <a className="footer-link" href="#">Vue Js</a>
                                    </li>
                                    <li>
                                        <a className="footer-link" href="#">HTML/CSS</a>
                                    </li>
                                    <li>
                                        <a className="footer-link" href="#">Java Script</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <p className="text-center bg-copyright p-2 rounded">
                                &copy;2022 Kianoosh Moloodi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

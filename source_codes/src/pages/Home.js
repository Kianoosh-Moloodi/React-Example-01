import companyLogo from '../style/reactlogo.png';

function Home() {
    return (
        <section className="my-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 p-3 p-lg-5">
                        <h5 className="fs-4 fw-bold text-primary">
                            Project with React & Bootstrap
                        </h5>
                        <p className="fs-5">
                            In this project, I have used React version 18, React router version 6 and bootstrap version 5. This project is a great example for learning to work with hooks, components and the Fetch API section. If this project has caught your eye, I would be grateful if you could give me a positive rating on LinkedIn.
                        </p>
                        <a className='btn btn-primary' href="https://www.linkedin.com/in/kianoosh-moloodi/" target="_blank"><i className="bi bi-linkedin"></i> LinkedIn</a>

                    </div>
                    <div className="col-md-5 text-center p-3 p-lg-5">
                        <img className="img-fluid img-animation" src={companyLogo} alt="#" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
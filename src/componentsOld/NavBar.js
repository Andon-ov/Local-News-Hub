function NavBar() {
    return (
        <div className="nav-bar">
            <div className="container">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="http://our-recipes.ml/" className="navbar-brand">MENU</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <div className="nav-item dropdown">
                                <a href="http://our-recipes.ml/" className="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                                <div className="dropdown-menu">
                                    <a href="http://our-recipes.ml/" className="dropdown-item">Sub Item 1</a>
                                    <a href="http://our-recipes.ml/" className="dropdown-item">Sub Item 2</a>
                                </div>
                            </div>
                            <a href="single-page.html" className="nav-item nav-link">Single Page</a>
                            <a href="contact.html" className="nav-item nav-link">Contact Us</a>
                        </div>
                        <div className="social ml-auto">
                            <a href="http://our-recipes.ml/"><i className="fab fa-twitter"></i></a>
                            <a href="http://our-recipes.ml/"><i className="fab fa-facebook-f"></i></a>
                            <a href="http://our-recipes.ml/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="http://our-recipes.ml/"><i className="fab fa-instagram"></i></a>
                            <a href="http://our-recipes.ml/"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default NavBar;
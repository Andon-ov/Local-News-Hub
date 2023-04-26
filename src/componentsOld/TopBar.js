function TopBar() {
    return (
        <div className="top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="tb-contact">
                            <p><i className="fas fa-envelope"></i>info@mail.com</p>
                            <p><i className="fas fa-phone-alt"></i>+012 345 6789</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="tb-menu">
                            <a href="http://our-recipes.ml/">About</a>
                            <a href="http://our-recipes.ml/">Privacy</a>
                            <a href="http://our-recipes.ml/">Terms</a>
                            <a href="http://our-recipes.ml/">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TopBar;
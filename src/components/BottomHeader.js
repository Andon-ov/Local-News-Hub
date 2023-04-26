function BottomHeader() {
    return (
        <div className="header-bottom header-sticky">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-10 col-lg-10 col-md-12 header-flex">
                        {/* <!-- sticky --> */}
                        <div className="sticky-logo">
                            <a href="index.html"><img src="img/logo/logo.png" alt="" /></a>
                        </div>
                        {/* <!-- Main-menu --> */}
                        <div className="main-menu d-none d-md-block">
                            <nav>
                                <ul id="navigation">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="categori.html">Category</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="latest_news.html">Latest News</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="submenu">
                                            <li><a href="elements.html">Element</a></li>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="single-blog.html">Blog Details</a></li>
                                            <li><a href="details.html">Categori Details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4">
                        <div className="header-right-btn f-right d-none d-lg-block">
                            <i className="fas fa-search special-tag"></i>
                            <div className="search-box">
                                <form action="#">
                                    <input type="text" placeholder="Search" />

                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Mobile Menu --> */}
                    <div className="col-12">
                        <div className="mobile_menu d-block d-md-none"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BottomHeader;
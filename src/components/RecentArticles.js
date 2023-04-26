function RecentArticles() {
    return (
        <div className="recent-articles">
                <div className="container">
                    <div className="recent-wrapper">
                        {/* <!-- section Tittle --> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-tittle mb-30">
                                    <h3>Recent Articles</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="recent-active dot-style d-flex dot-style">
                                    <div className="single-recent mb-100">
                                        <div className="what-img">
                                            <img src="img/news/recent1.jpg" alt=""/>
                                        </div>
                                        <div className="what-cap">
                                            <span className="color1">Night party</span>
                                            <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                        </div>
                                    </div>
                                    <div className="single-recent mb-100">
                                        <div className="what-img">
                                            <img src="img/news/recent2.jpg" alt=""/>
                                        </div>
                                        <div className="what-cap">
                                            <span className="color1">Night party</span>
                                            <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                        </div>
                                    </div>
                                    <div className="single-recent mb-100">
                                        <div className="what-img">
                                            <img src="img/news/recent3.jpg" alt=""/>
                                        </div>
                                        <div className="what-cap">
                                            <span className="color1">Night party</span>
                                            <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                        </div>
                                    </div>
                                    <div className="single-recent mb-100">
                                        <div className="what-img">
                                            <img src="img/news/recent2.jpg" alt=""/>
                                        </div>
                                        <div className="what-cap">
                                            <span className="color1">Night party</span>
                                            <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default RecentArticles;
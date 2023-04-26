function TopFooter() {
    return (
<div className="footer-area footer-padding fix">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12">
                            <div className="single-footer-caption">
                                <div className="single-footer-caption">
                                    {/* <!-- logo --> */}
                                    <div className="footer-logo">
                                        <a href="index.html"><img src="img/logo/logo2_footer.png" alt=""/></a>
                                    </div>
                                    <div className="footer-tittle">
                                        <div className="footer-pera">
                                            <p>Suscipit mauris pede for con sectetuer sodales adipisci for cursus fames
                                                lectus tempor da blandit gravida sodales Suscipit mauris pede for con
                                                sectetuer sodales adipisci for cursus fames lectus tempor da blandit
                                                gravida sodales Suscipit mauris pede for sectetuer.</p>
                                        </div>
                                    </div>
                                    {/* <!-- social --> */}
                                    <div className="footer-social">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4  col-sm-6">
                            <div className="single-footer-caption mt-60">
                                <div className="footer-tittle">
                                    <h4>Newsletter</h4>
                                    <p>Heaven fruitful doesn't over les idays appear creeping</p>
                                    {/* <!-- Form --> */}
                                    <div className="footer-form">
                                        <div id="mc_embed_signup">
                                            <form target="_blank"
                                                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                                  method="get" className="subscribe_form relative mail_part">
                                                <input type="email" name="email" id="newsletter-form-email"
                                                       placeholder="Email Address"
                                                       className="placeholder hide-on-focus"
                                                       onFocus="this.placeholder = ''"
                                                       onBlur="this.placeholder = ' Email Address '"/>
                                                <div className="form-icon">
                                                    <button type="submit" name="submit" id="newsletter-submit"
                                                            className="email_icon newsletter-submit button-contactForm">
                                                        <img src="img/logo/form-iocn.png" alt=""/></button>
                                                </div>
                                                <div className="mt-10 info"></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                            <div className="single-footer-caption mb-50 mt-60">
                                <div className="footer-tittle">
                                    <h4>Instagram Feed</h4>
                                </div>
                                <div className="instagram-gellay">
                                    <ul className="insta-feed">
                                        <li><a href="#"><img src="img/post/instra1.jpg" alt=""/></a></li>
                                        <li><a href="#"><img src="img/post/instra2.jpg" alt=""/></a></li>
                                        <li><a href="#"><img src="img/post/instra3.jpg" alt=""/></a></li>
                                        <li><a href="#"><img src="img/post/instra4.jpg" alt=""/></a></li>
                                        <li><a href="#"><img src="img/post/instra5.jpg" alt=""/></a></li>
                                        <li><a href="#"><img src="img/post/instra6.jpg" alt=""/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default TopFooter;
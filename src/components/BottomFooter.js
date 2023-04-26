function BottomFooter() {
    return (
        <div className="footer-bottom-area">
            <div className="container">
                <div className="footer-border">
                    <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="footer-copy-right">
                                <p>Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer-menu f-right">
                                <ul>
                                    <li><a href="#">Terms of use</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BottomFooter;
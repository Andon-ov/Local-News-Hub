function MidHeader(){
    return(
        <div className="header-mid d-none d-md-block">
        <div className="container">
            <div className="row d-flex align-items-center">
                {/* <!-- Logo --> */}
                <div className="col-xl-3 col-lg-3 col-md-3">
                    <div className="logo">
                        <a href="index.html"><img src="img/logo/logo.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                    <div className="header-banner f-right ">
                        <img src="img/hero/header_card.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default MidHeader;
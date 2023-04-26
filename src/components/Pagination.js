function Pagination() {
    return (
        <div className="pagination-area pb-45 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="single-wrap d-flex justify-content-center">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-start">
                                    <li className="page-item"><a className="page-link" href="#"><span
                                        className="flaticon-arrow roted"></span></a></li>
                                    <li className="page-item active"><a className="page-link" href="#">01</a></li>
                                    <li className="page-item"><a className="page-link" href="#">02</a></li>
                                    <li className="page-item"><a className="page-link" href="#">03</a></li>
                                    <li className="page-item"><a className="page-link" href="#"><span
                                        className="flaticon-arrow right-arrow"></span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pagination;
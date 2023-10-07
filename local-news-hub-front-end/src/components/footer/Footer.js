import './Footer.css';
import { Link } from 'react-router-dom';
import { GrFacebook, GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr';
import { BiSolidHomeAlt2 } from "react-icons/bi";



function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <section className="footer">



            <div className='footer__links'>

                <Link className='footer__link' to="/contact">Contact Us</Link>

                <Link className='footer__link' to="/advertise">Advertise</Link>


                <Link className='footer__link up' onClick={scrollToTop}><BiSolidHomeAlt2 size={40} /> </Link>

                {/* <Link className='footer__link' to="/terms">Terms of Service</Link>

                <Link className='footer__link' to="/subscriptions">Subscriptions</Link> */}

            </div>
            <ul className="social">
                <li className="whether__icon facebook">
                    <Link to='https://www.facebook.com/eratv.bg' target='blank_'><GrFacebook /></Link>
                </li>
                <li className="whether__icon instagram">
                    <Link><GrInstagram /></Link>
                </li>
                <li className="whether__icon youtube">
                    <Link to='https://www.youtube.com/@EraTVJambol' target='blank_'><GrYoutube /></Link>
                </li>
                <li className="whether__icon twitter">
                    <Link><GrTwitter /></Link>
                </li>

            </ul>
            <p>Copyright &copy; {year} Local News Portal. The LNH is not responsible for the content of external
                sites.</p>
            <p>Powered by: <Link to='https://github.com/Andon-ov' target='blank_'><span className='github'>Andon-ov</span></Link></p>


        </section>
    );
}

export default Footer;
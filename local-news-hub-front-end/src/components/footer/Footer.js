import './Footer.css';
import { Link } from 'react-router-dom';
import {GrFacebook, GrInstagram, GrTwitter, GrYoutube} from 'react-icons/gr';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <section className="footer">

            

            <div className='footer__links'>

                <Link className='footer__link' to="/contact">Contact Us</Link>

                <Link className='footer__link' to="/advertise">Advertise</Link>

                <Link className='footer__link' to="/terms">Terms of Service</Link>

                <Link className='footer__link' to="/subscriptions">Subscriptions</Link>

            </div>
            <ul className="social">
                <li className="whether__icon facebook">
                    <Link to='https://www.youtube.com/@EraTVJambol' target='blank_'><GrFacebook /></Link>

                </li>
                <li className="whether__icon instagram">
                    <Link><GrInstagram /></Link>
                </li>
                <li className="whether__icon youtube">
                    <Link><GrYoutube /></Link>
                </li>
                <li className="whether__icon twitter">
                    <Link><GrTwitter /></Link>
                </li>

            </ul>
            <p>Copyright &copy; {year} Local News Portal. The LNH is not responsible for the content of external
                sites.</p>
        </section>
    );
}

export default Footer;
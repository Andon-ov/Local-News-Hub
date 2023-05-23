import './Footer.css';
import {Link} from 'react-router-dom';

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
            <p>Copyright &copy; {year} Local News Portal. The LNH is not responsible for the content of external
                sites.</p>
        </section>
    );
}

export default Footer;
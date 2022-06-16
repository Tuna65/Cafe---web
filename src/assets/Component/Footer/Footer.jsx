import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faFacebook, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';

import logo1 from '../../img/logo.png';
import logo2 from '../../img/logo-2.png';

function Footer() {
    return (
        <div className="footer__container">
            <div className="footer__inner">
                <div className="footer__inner-right">
                    <span>© Copyright 2017 - Delizus by OceanThemes</span>
                </div>
                <div className="footer__inner-logo">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                </div>
                <div className="footer__inner-left">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faRss} />
                    <FontAwesomeIcon icon={faGooglePlusG} />
                    <FontAwesomeIcon icon={faDribbble} />
                </div>
            </div>
        </div>
    );
}

export default Footer;

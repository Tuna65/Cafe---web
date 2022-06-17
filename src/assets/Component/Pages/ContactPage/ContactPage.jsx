import Iframe from 'react-iframe';
import React, { useState } from 'react';

import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';

import './ContactPage.css';
import ContactForm from './ContactForm/ContactForm';
import MessageForm from './MessageForm/MessageForm';
import Header from '../../Header/Header';

function ContactPage() {
    const [isActived, setIsActived] = useState('li-1');

    const [renderContact, isRenderContact] = useState(1);

    return (
        <div className="contact__page-wrapper">
            <div className="contact__page-header">
                <Header />
            </div>
            <div className="contact__page-banner">
                <Banner title={'CONTACT US'} note={'WHERE WE ARE'} />
            </div>
            <div className="contact__page-map">
                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1655343146417!5m2!1svi!2s"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="iframes"
                />
                <div className="contact__page-form">
                    <div className="form__inner">
                        <div className="contact__form-wrapper">
                            <div>
                                <ul className="form__option">
                                    <li
                                        className={isActived === 'li-1' ? 'actived ' : ''}
                                        onClick={() => {
                                            setIsActived('li-1');
                                            isRenderContact(1);
                                        }}
                                    >
                                        OUR ADDRESS
                                    </li>
                                    <li
                                        className={isActived === 'li-2' ? 'actived' : ''}
                                        onClick={() => {
                                            isRenderContact(2);
                                            setIsActived('li-2');
                                        }}
                                    >
                                        SEND US MESSAGE
                                    </li>
                                    <li
                                        className={isActived === 'li-3' ? 'actived' : ''}
                                        onClick={() => {
                                            setIsActived('li-3');
                                        }}
                                    >
                                        VIEW MAP
                                    </li>
                                </ul>
                            </div>

                            <ContactForm hiden={renderContact} />
                            <MessageForm hiden={renderContact} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ContactPage;

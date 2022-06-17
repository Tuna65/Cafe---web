import { useRef, useState } from 'react';
import Intro from '../../Intro/Intro';
import './Booking.css';

function Booking() {
    const warnName = useRef();
    const warnEmail = useRef();
    const warnPhone = useRef();
    const tks = useRef();

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');

    const content = {
        title: 'BOOK A TABLE',
        note: 'Reservation',
        paragraph: '',
    };

    const checkValue = (value, warn, message1, message2) => {
        if (value === '') {
            warn.current.innerText = `${message1}`;
        } else {
            if (message2) {
                let regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
                if (!regex.test(value)) {
                    warn.current.innerText = `${message2}`;
                }
            }
        }
    };

    const handleOnclick = (e) => {
        checkValue(nameValue, warnName, 'Tell me your name');
        checkValue(emailValue, warnEmail, 'Tell me your email address', 'You just entered not email');
        checkValue(phoneValue, warnPhone, 'We want your phone number');
        if (isNaN(phoneValue)) {
            warnPhone.current.innerText = 'Here just entered number';
        }
        if (
            warnName.current.innerText === '' &&
            warnEmail.current.innerText === '' &&
            warnPhone.current.innerText === ''
        ) {
            tks.current.innerText = 'We will contact soon';
        } else {
            e.preventDefault();
        }
    };
    return (
        <div className="b__wrapper">
            <div className="b__blur"></div>
            <form action="" className="b__form">
                <div className="b__intro">
                    <Intro title={content.title} note={content.note} paragraph={content.paragraph} margin={true} />
                </div>
                <div className="form__book">
                    <div className="form__pic">
                        <div className="pic">
                            <label>Date</label>
                            <input type="date" />
                        </div>
                        <div className="pic">
                            <label>Time</label>
                            <input type="time" />
                        </div>

                        <div className="pic">
                            <label>Party</label>
                            <input type="count" />
                        </div>
                    </div>
                    <div className="form__contact">
                        <div className="contact__inner">
                            <label>Name</label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setNameValue(e.target.value);
                                    warnName.current.innerText = '';
                                }}
                            />
                            <span className="warring__name" ref={warnName}></span>
                        </div>
                        <div className="contact__inner">
                            <label>Email</label>
                            <input
                                type="email"
                                onChange={(e) => {
                                    setEmailValue(e.target.value);
                                    warnEmail.current.innerText = '';
                                }}
                            />
                            <span className="warring__email" ref={warnEmail}></span>
                        </div>
                        <div className="contact__inner">
                            <label>Phone</label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setPhoneValue(e.target.value);
                                    warnPhone.current.innerText = '';
                                }}
                            />
                            <span className="warring__phone" ref={warnPhone}></span>
                        </div>
                        <span className="tks" ref={tks}></span>
                    </div>
                    <input type="submit" className="submit" value="REQUEST BOOKING" onClick={handleOnclick} />
                </div>
            </form>
        </div>
    );
}

export default Booking;
